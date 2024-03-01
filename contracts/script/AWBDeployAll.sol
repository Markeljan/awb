// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/DAOToken.sol";
import "../src/DAOGovernor.sol";
import "../src/AWBRegistry.sol";

contract DeployAWBToken is Script {
    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        // Parameters for the AWBToken constructor
        string memory tokenName = "DAO Token";
        string memory symbol = "DAO";
        address mintAddress = msg.sender; // The deploying address will receive the initial supply
        uint256 totalSupply = 1e24; // For example, 1 million tokens with 18 decimal places

        // Deploy the AWBToken contract
        DAOToken token = new DAOToken(
            tokenName,
            symbol,
            mintAddress,
            totalSupply
        );

        address deployedTokenAddress = address(token);
        console.log("DAOToken deployed to:", deployedTokenAddress);

        // deploy the Governor

        // Parameters for the DAOGovernor constructor
        string memory governorName = "DAO Governor";
        uint256 votingDelay = 1; // Blocks
        uint256 votingPeriod = 45818; // Blocks, roughly 1 week assuming 13s blocks
        uint256 proposalThreshold = 1; // Minimum number of tokens required to submit a proposal
        uint256 quorumVotes = 4; // Percentage required for quorum (e.g., 4% would be input as 4)

        DAOGovernor governor = new DAOGovernor(
            governorName,
            IVotes(deployedTokenAddress),
            votingDelay,
            votingPeriod,
            proposalThreshold,
            quorumVotes
        );

        address deployedGovernorAddress = address(governor);
        console.log("DAOGovernor deployed to:", deployedGovernorAddress);

        // Deploy the AWBRegistry contract
        AWBRegistry registry = new AWBRegistry("Agents With Benefits", "AWB");
        console.log("AWBRegistry deployed to:", address(registry));

        vm.stopBroadcast();
    }
}
