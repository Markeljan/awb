// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/DAOGovernor.sol";

contract DeployDAOGovernor is Script {
    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        // Parameters for the DAOGovernor constructor
        string memory name = "DAO Governor";
        IVotes token = IVotes(0xD2Af2a62b16461d2Fe4BB2Fd5F9c0325aC96D0fb); // Replace with your token contract address
        uint256 votingDelay = 1; // Blocks
        uint256 votingPeriod = 45818; // Blocks, roughly 1 week assuming 13s blocks
        uint256 proposalThreshold = 1; // Minimum number of tokens required to submit a proposal
        uint256 quorumVotes = 4; // Percentage required for quorum (e.g., 4% would be input as 4)

        DAOGovernor governor = new DAOGovernor(
            name,
            token,
            votingDelay,
            votingPeriod,
            proposalThreshold,
            quorumVotes
        );
        console.log("DAOGovernor deployed to:", address(governor));

        vm.stopBroadcast();
    }
}
