"use client";
import { useState } from "react";

type deployAgentProps = {
  tokenName: string;
  tokenSymbol: string;
  agentName: string;
  agentDescription: string;
  metadataUri?: string;
  sourceCodeUri?: string;
};

export function useDeployAgent() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  async function deployAgent(deployAgentProps: deployAgentProps) {
    setLoading(true);
    const deploymentData = generateDeploymentPayload(deployAgentProps);
    try {
      // TODO: create API Key or open CORS on w3gpt
      const response = await fetch("https://web3gpt-5d6enxfn6-w3gpt.vercel.app/api/deploy-contract", {
        method: "POST",
        headers: {},
        body: JSON.stringify(deploymentData),
      });
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
      console.error(error);
    }
  }
  return { deployAgent, data, loading, error };
}

function generateDeploymentPayload({
  tokenName,
  tokenSymbol,
  agentName,
  agentDescription,
  metadataUri = "",
  sourceCodeUri = "",
}: deployAgentProps) {
  const deploymentData = {
    chainId: 84532,
    contractName: tokenName,
    sourceCode: `// SPDX-License-Identifier: MIT\n// Compatible with OpenZeppelin Contracts ^5.0.0\npragma solidity ^0.8.20;\n\nimport "@openzeppelin/contracts/token/ERC20/ERC20.sol";\nimport "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";\nimport "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";\nimport "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";\n\n/// @custom:security-contact contact@agentswithbenefits.xyz\ncontract ${tokenName} is ERC20, ERC20Burnable, ERC20Permit, ERC20Votes {\n    string public agentName;\n    string public agentDescription;\n    string public metadataUri;\n    string public sourceCodeUri;\n    uint public thresholdPercentage = 0;\n    mapping(address => uint256) public votes;\n\n    struct Proposal {\n        uint256 id;\n        string description;\n        string newSourceCodeUri;\n        uint256 votesFor;\n        uint256 votesAgainst;\n        uint256 deadline;\n        bool executed;\n        mapping(address => bool) voted;\n    }\n\n    uint256 public proposalCount;\n    mapping(uint256 => Proposal) public proposals;\n\n    event ProposalCreated(\n        uint256 id,\n        string description,\n        string newSourceCodeUri,\n        uint256 deadline\n    );\n    event Voted(uint256 proposalId, address voter, bool vote, uint256 weight);\n    event ProposalExecuted(uint256 id, bool success);\n\n    constructor(\n        string memory _tokenName,\n        string memory _tokenSymbol,\n        string memory _agentName,\n        string memory _agentDescription,\n        string memory _metadataUri,\n        string memory _sourceCodeUri\n    ) ERC20(_tokenName, _tokenSymbol) ERC20Permit(_tokenName) {\n        agentName = _agentName;\n        agentDescription = _agentDescription;\n        metadataUri = _metadataUri;\n        sourceCodeUri = _sourceCodeUri;\n        _mint(msg.sender, 21000000 * 10 ** decimals());\n    }\n\n    function createProposal(\n        string memory description,\n        string memory newSourceCodeUri,\n        uint256 durationTimestamp\n    ) public {\n        require(durationTimestamp > 0, "Duration must be greater than 0");\n\n        uint256 proposalId = ++proposalCount;\n        Proposal storage proposal = proposals[proposalId];\n        proposal.id = proposalId;\n        proposal.description = description;\n        proposal.newSourceCodeUri = newSourceCodeUri;\n        proposal.deadline = block.timestamp + durationTimestamp;\n\n        emit ProposalCreated(\n            proposalId,\n            description,\n            newSourceCodeUri,\n            proposal.deadline\n        );\n    }\n\n    function vote(uint256 proposalId, bool support) public {\n        Proposal storage proposal = proposals[proposalId];\n        require(block.timestamp < proposal.deadline, "Voting is closed");\n        require(!proposal.voted[msg.sender], "Already voted");\n\n        uint256 voterVotes = getVotes(msg.sender);\n        require(voterVotes > 0, "No voting power");\n\n        if (support) {\n            proposal.votesFor += voterVotes;\n        } else {\n            proposal.votesAgainst += voterVotes;\n        }\n\n        proposal.voted[msg.sender] = true;\n        emit Voted(proposalId, msg.sender, support, voterVotes);\n    }\n\n    function executeProposal(uint256 proposalId) public {\n        Proposal storage proposal = proposals[proposalId];\n        require(block.timestamp >= proposal.deadline, "Voting not closed");\n        require(!proposal.executed, "Already executed");\n\n        uint256 totalSupply = totalSupply();\n        uint256 voteThreshold = (totalSupply * thresholdPercentage) / 100;\n\n        proposal.executed = true;\n\n        if (\n            proposal.votesFor > proposal.votesAgainst &&\n            proposal.votesFor >= voteThreshold\n        ) {\n            sourceCodeUri = proposal.newSourceCodeUri;\n            emit ProposalExecuted(proposalId, true);\n        } else {\n            emit ProposalExecuted(proposalId, false);\n        }\n    }\n\n    // The following functions are overrides required by Solidity.\n\n    function _update(\n        address from,\n        address to,\n        uint256 value\n    ) internal override(ERC20, ERC20Votes) {\n        super._update(from, to, value);\n    }\n\n    function nonces(\n        address owner\n    ) public view override(ERC20Permit, Nonces) returns (uint256) {\n        return super.nonces(owner);\n    }\n}\n`,
    constructorArgs: [tokenName, tokenSymbol, agentName, agentDescription, metadataUri, sourceCodeUri],
  };
  return deploymentData;
}
