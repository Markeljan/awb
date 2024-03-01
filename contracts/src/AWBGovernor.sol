// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/governance/Governor.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";

/// @custom:security-contact contact@agentswithbenefits.xyz
contract AWBGovernor is
    Governor,
    GovernorCountingSimple,
    GovernorVotes,
    GovernorVotesQuorumFraction
{
    uint256 internal initialVotingDelay;
    uint256 internal initialVotingPeriod;
    uint256 internal initialProposalThreshold;

    constructor(
        string memory _name,
        IVotes _token,
        uint256 _votingDelay,
        uint256 _votingPeriod,
        uint256 _proposalThreshold,
        uint256 _quorumVotes
    )
        Governor(_name)
        GovernorVotes(_token)
        GovernorVotesQuorumFraction(_quorumVotes)
    {
        initialVotingDelay = _votingDelay;
        initialVotingPeriod = _votingPeriod;
        initialProposalThreshold = _proposalThreshold;
    }

    function votingDelay() public view override returns (uint256) {
        return initialVotingDelay;
    }

    function votingPeriod() public view override returns (uint256) {
        return initialVotingPeriod;
    }

    function proposalThreshold() public view override returns (uint256) {
        return initialProposalThreshold;
    }

    // The following functions are overrides required by Solidity.

    function quorum(
        uint256 blockNumber
    )
        public
        view
        override(Governor, GovernorVotesQuorumFraction)
        returns (uint256)
    {
        return super.quorum(blockNumber);
    }
}
