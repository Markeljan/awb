// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

/// @custom:security-contact contact@agentswithbenefits.xyz
contract AWBRegistry {
    struct Dao {
        address governorAddress;
        address tokenAddress;
        address agentAddress;
        string name;
        string description;
        string metadataURI;
    }

    struct AgentRequest {
        uint256 id;
        address userAddress;
        address agentAddress;
        string request;
        bool completed;
        string response;
    }

    mapping(address => Dao) public governorAddressToDao;
    mapping(address => AgentRequest[]) public userAddressToAgentRequests;

    Dao[] public daos;
    AgentRequest[] public agentRequests;

    // TODO: check sender is _governorAddress, check _agentAddress is owned by _governorAddress
    function registerDao(
        address _governorAddress,
        address _tokenAddress,
        address _agentAddress,
        string memory _name,
        string memory _description,
        string memory _metadataURI
    ) external {
        require(
            governorAddressToDao[_governorAddress].governorAddress ==
                address(0),
            "AWBRegistry: DAO already registered"
        );

        Dao memory dao = Dao({
            governorAddress: _governorAddress,
            tokenAddress: _tokenAddress,
            agentAddress: _agentAddress,
            name: _name,
            description: _description,
            metadataURI: _metadataURI
        });

        governorAddressToDao[_governorAddress] = dao;
        daos.push(dao);
    }

    // TODO: check sender is _governorAddress, check _agentAddress is owned by _governorAddress
    function updateDao(
        address _governorAddress,
        address _tokenAddress,
        address _agentAddress,
        string memory _name,
        string memory _description,
        string memory _metadataURI
    ) external {
        require(
            governorAddressToDao[_governorAddress].governorAddress !=
                address(0),
            "AWBRegistry: DAO not registered"
        );

        Dao storage dao = governorAddressToDao[_governorAddress];
        dao.tokenAddress = _tokenAddress;
        dao.agentAddress = _agentAddress;
        dao.name = _name;
        dao.description = _description;
        dao.metadataURI = _metadataURI;
    }

    function getDaoByGovernorAddress(
        address _governorAddress
    )
        external
        view
        returns (
            address,
            address,
            address,
            string memory,
            string memory,
            string memory
        )
    {
        Dao memory dao = governorAddressToDao[_governorAddress];
        return (
            dao.governorAddress,
            dao.tokenAddress,
            dao.agentAddress,
            dao.name,
            dao.description,
            dao.metadataURI
        );
    }

    function getDaos() external view returns (Dao[] memory) {
        return daos;
    }

    function getDaosCount() external view returns (uint256) {
        return daos.length;
    }

    // Request
    function createAgentRequest(
        address _userAddress,
        address _agentAddress,
        string memory _request,
        bool _completed
    ) external {
        AgentRequest memory agentRequest = AgentRequest({
            id: agentRequests.length,
            userAddress: _userAddress,
            agentAddress: _agentAddress,
            request: _request,
            completed: _completed,
            response: ""
        });
        userAddressToAgentRequests[_userAddress].push(agentRequest);
        agentRequests.push(agentRequest);
    }

    function updateAgentRequest(
        uint256 _id,
        string memory _response,
        bool _completed
    ) external {
        AgentRequest storage agentRequest = agentRequests[_id];
        agentRequest.response = _response;
        agentRequest.completed = _completed;
    }

    function getAgentRequestsByUserAddress(
        address _userAddress
    ) external view returns (AgentRequest[] memory) {
        return userAddressToAgentRequests[_userAddress];
    }

    function getAgentRequests() external view returns (AgentRequest[] memory) {
        return agentRequests;
    }

    function getAgentRequestsCount() external view returns (uint256) {
        return agentRequests.length;
    }
}
