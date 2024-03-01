// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/DAOToken.sol";
import "../src/DAOGovernor.sol";
import "../src/AWBRegistry.sol";

contract DeployAllDev is Script {
    function setUp() public {}

    function run() public {
        vm.startBroadcast();
        address MINT_ADDRESS = 0x31B7E879Ea9857770B3258A9eAC52bEeD2fc9271;

        // Parameters for the AWBToken constructor
        string memory tokenName = "DAO Token";
        string memory symbol = "DAO";
        address mintAddress = MINT_ADDRESS; // The deploying address will receive the initial supply
        uint256 totalSupply = 1e24; // For example, 1 million tokens with 18 decimal places

        // Deploy DAO Token
        DAOToken token = new DAOToken(
            tokenName,
            symbol,
            mintAddress,
            totalSupply
        );

        address deployedTokenAddress = address(token);
        console.log("DAOToken deployed to:", deployedTokenAddress);

        // Parameters for the DAOGovernor constructor
        string memory governorName = "DAO Governor";
        uint256 votingDelay = 0; // Blocks (2 seconds block time on base)
        uint256 votingPeriod = 30; // Blocks so 30 * 2 = 60 seconds
        uint256 proposalThreshold = 1; // Minimum number of tokens required to submit a proposal
        uint256 quorumVotes = 0; // Percentage required for quorum (e.g., 4% would be input as 4)

        // Deploy Governor
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

        // Deploy AWBRegistry
        AWBRegistry registry = new AWBRegistry("Agents With Benefits", "AWB");
        console.log("AWBRegistry deployed to:", address(registry));

        vm.stopBroadcast();
    }
}
