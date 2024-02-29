// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

/// @custom:security-contact contact@agentswithbenefits.xyz
contract AgentDAO is ERC20, ERC20Burnable, ERC20Permit, ERC20Votes {
    string public agentName;
    string public agentDescription;
    string public metadataUri;
    string public sourceCodeUri;
    uint public thresholdPercentage = 0;
    mapping(address => uint256) public votes;

    struct Proposal {
        uint256 id;
        string description;
        string newSourceCodeUri;
        uint256 votesFor;
        uint256 votesAgainst;
        uint256 deadline;
        bool executed;
        mapping(address => bool) voted;
    }

    uint256 public proposalCount;
    mapping(uint256 => Proposal) public proposals;

    event ProposalCreated(
        uint256 id,
        string description,
        string newSourceCodeUri,
        uint256 deadline
    );
    event Voted(uint256 proposalId, address voter, bool vote, uint256 weight);
    event ProposalExecuted(uint256 id, bool success);

    constructor(
        string memory _tokenName,
        string memory _tokenSymbol,
        string memory _agentName,
        string memory _agentDescription,
        string memory _metadataUri,
        string memory _sourceCodeUri
    ) ERC20(_tokenName, _tokenSymbol) ERC20Permit(_tokenName) {
        agentName = _agentName;
        agentDescription = _agentDescription;
        metadataUri = _metadataUri;
        sourceCodeUri = _sourceCodeUri;
        _mint(msg.sender, 21000000 * 10 ** decimals());
    }

    function createProposal(
        string memory description,
        string memory newSourceCodeUri,
        uint256 durationTimestamp
    ) public {
        require(durationTimestamp > 0, "Duration must be greater than 0");

        uint256 proposalId = ++proposalCount;
        Proposal storage proposal = proposals[proposalId];
        proposal.id = proposalId;
        proposal.description = description;
        proposal.newSourceCodeUri = newSourceCodeUri;
        proposal.deadline = block.timestamp + durationTimestamp;

        emit ProposalCreated(
            proposalId,
            description,
            newSourceCodeUri,
            proposal.deadline
        );
    }

    function vote(uint256 proposalId, bool support) public {
        Proposal storage proposal = proposals[proposalId];
        require(block.timestamp < proposal.deadline, "Voting is closed");
        require(!proposal.voted[msg.sender], "Already voted");

        uint256 voterVotes = getVotes(msg.sender);
        require(voterVotes > 0, "No voting power");

        if (support) {
            proposal.votesFor += voterVotes;
        } else {
            proposal.votesAgainst += voterVotes;
        }

        proposal.voted[msg.sender] = true;
        emit Voted(proposalId, msg.sender, support, voterVotes);
    }

    function executeProposal(uint256 proposalId) public {
        Proposal storage proposal = proposals[proposalId];
        require(block.timestamp >= proposal.deadline, "Voting not closed");
        require(!proposal.executed, "Already executed");

        uint256 totalSupply = totalSupply();
        uint256 voteThreshold = (totalSupply * thresholdPercentage) / 100;

        proposal.executed = true;

        if (
            proposal.votesFor > proposal.votesAgainst &&
            proposal.votesFor >= voteThreshold
        ) {
            sourceCodeUri = proposal.newSourceCodeUri;
            emit ProposalExecuted(proposalId, true);
        } else {
            emit ProposalExecuted(proposalId, false);
        }
    }

    // The following functions are overrides required by Solidity.

    function _update(
        address from,
        address to,
        uint256 value
    ) internal override(ERC20, ERC20Votes) {
        super._update(from, to, value);
    }

    function nonces(
        address owner
    ) public view override(ERC20Permit, Nonces) returns (uint256) {
        return super.nonces(owner);
    }
}
