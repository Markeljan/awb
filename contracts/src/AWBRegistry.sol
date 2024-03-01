// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/governance/IGovernor.sol";

contract AWBRegistry is ERC721, ERC721URIStorage {
    // agent is a service that can be requested to perform a task
    struct Agent {
        uint256 id;
        address daoGovernor;
        address daoToken;
        string tokenURI;
        uint256 runPrice;
        uint256[] requestIds;
        bool active;
    }

    // request to an agent.  Picked up by fulfillers off-chain and fulfilled on-chain and off-chain
    struct Request {
        uint256 id;
        uint256 agentId;
        address origin;
        string request;
        bool fulfilled;
        string result;
        string resultURI;
        uint256 price;
        address fulfiller;
    }

    struct User {
        address userAddress;
        uint256[] requestIds;
        // TODO: address[] whitelistedFulfillers;
    }

    // fulfillers are addresses permissioned to fulfill requests (allowing for off-chain requests)
    struct Fulfiller {
        string name;
        string description;
        address fulfillerAddress;
        uint256[] requestIds;
    }

    uint256 private _nextTokenId;
    uint256 private _nextRequestId;

    mapping(uint256 => Agent) public agentIdToAgent;
    mapping(address => Agent) public daoGovernorToAgent;
    mapping(uint256 => Request) public requestIdToRequest;
    mapping(address => User) public addressToUser;
    mapping(address => Fulfiller) public fulfillerAddressToFulfiller;

    mapping(address => uint256) public balances;

    Agent[] public agents;
    Request[] public requests;
    User[] public users;
    Fulfiller[] public fulfillers;

    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {}

    // register an agent with the registry. Mints a new NFT and stores the agent data
    function registerAgent(
        address _daoToken,
        string memory _tokenURI,
        uint256 _runPrice
    ) public {
        // require the sender to not have an active agent
        require(
            daoGovernorToAgent[msg.sender].active == false,
            "You have an active agent"
        );

        uint256 tokenId = _nextTokenId++;

        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, _tokenURI);

        Agent memory agent = Agent({
            id: tokenId,
            daoGovernor: msg.sender,
            daoToken: _daoToken,
            tokenURI: _tokenURI,
            runPrice: _runPrice,
            requestIds: new uint256[](0),
            active: true
        });

        agentIdToAgent[tokenId] = agent;
        daoGovernorToAgent[msg.sender] = agent;
        agents.push(agent);
    }

    // register as a user with the registry
    function registerUser() public payable {
        require(
            addressToUser[msg.sender].userAddress == address(0),
            "User already exists"
        );

        User memory user = User({
            userAddress: msg.sender,
            requestIds: new uint256[](0)
        });

        addressToUser[msg.sender] = user;
        users.push(user);
    }

    // register as a fulfiller with the registry
    function registerFulfiller(
        string memory _name,
        string memory _description
    ) public {
        require(
            fulfillerAddressToFulfiller[msg.sender].fulfillerAddress ==
                address(0),
            "Fulfiller already exists"
        );

        Fulfiller memory fulfiller = Fulfiller({
            name: _name,
            description: _description,
            fulfillerAddress: msg.sender,
            requestIds: new uint256[](0)
        });

        fulfillerAddressToFulfiller[msg.sender] = fulfiller;
        fulfillers.push(fulfiller);
    }

    // make a request to an agent
    function submitRequest(
        uint256 _agentId,
        string memory _request,
        address _origin
    ) public {
        // only fulfillers can submit requests on behalf of others
        if (
            fulfillerAddressToFulfiller[msg.sender].fulfillerAddress ==
            address(0)
        ) {
            _origin = msg.sender;
        }

        Agent memory agent = agentIdToAgent[_agentId];
        require(agent.active == true, "Agent is not active");

        uint256 runPrice = agent.runPrice;

        require(balances[_origin] >= runPrice, "Insufficient balance");

        uint256 requestId = _nextRequestId++;

        Request memory request = Request({
            id: requestId,
            agentId: _agentId,
            origin: _origin,
            request: _request,
            fulfilled: false,
            result: "",
            resultURI: "",
            price: runPrice,
            fulfiller: address(0)
        });

        requestIdToRequest[requestId] = request;
        requests.push(request);

        agentIdToAgent[_agentId].requestIds.push(requestId);
        addressToUser[_origin].requestIds.push(requestId);
    }

    function fulfillRequest(
        uint256 _requestId,
        string memory _result,
        string memory _resultURI
    ) public {
        Request storage request = requestIdToRequest[_requestId];

        // Check if the request exists and is not yet fulfilled
        require(request.id == _requestId, "Request does not exist");
        require(!request.fulfilled, "Request already fulfilled");

        // Check if the caller is a registered fulfiller
        require(
            fulfillerAddressToFulfiller[msg.sender].fulfillerAddress ==
                msg.sender,
            "Caller is not a fulfiller"
        );

        // Calculate request price and apply holder discount if applicable
        uint256 requestPrice = agentIdToAgent[request.agentId].runPrice;
        bool holderDiscountEnabled = IERC20(
            agentIdToAgent[request.agentId].daoToken
        ).balanceOf(request.origin) > 0;
        if (holderDiscountEnabled) {
            // 50% discount for token holders
            requestPrice = requestPrice / 2;
        }

        // Check if the requester has sufficient balance
        require(
            balances[request.origin] >= requestPrice,
            "Insufficient balance"
        );

        // Deduct the price from the requester's balance
        balances[request.origin] -= requestPrice;

        // Fulfill the request
        request.fulfilled = true;
        request.result = _result;
        request.resultURI = _resultURI;
        request.fulfiller = msg.sender;

        // Update mappings
        requestIdToRequest[_requestId] = request;
        requests[request.id] = request;
        fulfillerAddressToFulfiller[msg.sender].requestIds.push(request.id);

        if (holderDiscountEnabled) {
            // Send the whole price to the fulfiller
            balances[msg.sender] += requestPrice;
        } else {
            // send 50/50
            balances[msg.sender] += requestPrice / 2;
            balances[agentIdToAgent[request.agentId].daoGovernor] +=
                requestPrice /
                2;
        }
    }

    // create and fulfill a request in one transaction (for fullfullers to fulfill off-chain requests)
    function createAndFulfillRequest(
        uint256 _agentId,
        address _origin,
        string memory _request,
        string memory _result,
        string memory _resultURI
    ) public {
        submitRequest(_agentId, _request, _origin);
        fulfillRequest(_nextRequestId - 1, _result, _resultURI);
    }

    // deposit ETH into the registry
    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    // withdraw ETH from the registry
    function withdraw(uint256 _amount) public {
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        balances[msg.sender] -= _amount;
        payable(msg.sender).transfer(_amount);
    }

    // getters
    function getAllAgents() public view returns (Agent[] memory) {
        return agents;
    }

    function getAllRequests() public view returns (Request[] memory) {
        return requests;
    }

    function getAllUsers() public view returns (User[] memory) {
        return users;
    }

    function getAllFulfillers() public view returns (Fulfiller[] memory) {
        return fulfillers;
    }

    function getAgentById(uint256 _id) public view returns (Agent memory) {
        return agentIdToAgent[_id];
    }

    function getRequestById(uint256 _id) public view returns (Request memory) {
        return requestIdToRequest[_id];
    }

    function getUserByAddress(
        address _address
    ) public view returns (User memory) {
        return addressToUser[_address];
    }

    function getFulfillerByAddress(
        address _address
    ) public view returns (Fulfiller memory) {
        return fulfillerAddressToFulfiller[_address];
    }

    ///////////////////////////////////
    // ERC721 with managed tokenURIs //
    //////////////////////////////////
    function safeMint(address to, string memory uri) internal {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function updateTokenURI(uint256 tokenId, string memory uri) public {
        require(
            ownerOf(tokenId) == msg.sender,
            "Caller is not the token owner"
        );
        _setTokenURI(tokenId, uri);
        agentIdToAgent[tokenId].tokenURI = uri;
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
