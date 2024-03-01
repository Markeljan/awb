// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import "../src/DAOToken.sol";
import "../src/DAOGovernor.sol";

contract DAOGovernorTest is Test {
    DAOToken public daoToken;
    DAOGovernor public daoGovernor;
    address public address1 = address(0x1);
    
    uint256 public initialSupply = 1e24; // 1 million tokens, for example

    function setUp() public {
        daoToken = new DAOToken("DAOToken", "DAO", address1, initialSupply);

        daoGovernor = new DAOGovernor(
            "DAO Governor",
            IVotes(address(daoToken)),
            0, // votingDelay
            30, // votingPeriod
            0, // proposalThreshold
            0 // quorumVotes
        );

        
    }

    function testInitialization() public {
        // Check if the mintAddress received the initial supply
        assertEq(
            daoToken.balanceOf(address1),
            initialSupply,
            "Initial supply was not minted correctly"
        );

        // Check if the governor has the correct voting delay
        assertEq(
            daoGovernor.votingDelay(),
            0,
            "Voting delay was not set correctly"
        );
    }

    function testCreateProposal() public {
        vm.startPrank(address1);

        daoToken.delegate(address1);

        vm.warp(31 days);


        address[] memory targets = new address[](1);
        // example, calling self
        targets[0] = address(this);

        uint256[] memory values = new uint256[](1);
        // sending no value
        values[0] = 0;

        bytes[] memory calldatas = new bytes[](1);
        // calling votingDelay()
        calldatas[0] = abi.encodeWithSignature("votingDelay()");

        // Define the description of the proposal
        string memory description = "Test Getting votingDelay";

        // Create the proposal
        uint256 state = daoGovernor.propose(targets, values, calldatas, description);

        console.log("Proposal State: %d", state);


        IGovernor.ProposalState proposalState = daoGovernor.state(55940484987783069191568106399829998427366547999168288344798891690013827728713);
        assertEq(uint(proposalState), 0, "Proposal was not created correctly");


    }
}
