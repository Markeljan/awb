// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {AgentDAO} from "../src/AgentDAO.sol";

contract AgentDAOTest is Test {
    AgentDAO public agentDao;
    address public owner;

    function setUp() public {
        owner = address(1);
        agentDao = new AgentDAO(
            "AgentDAO",
            "ADAO",
            "AgentDAO",
            "A DAO for agents",
            "https://metadata.xyz",
            "https://sourcecode.xyz"
        );
    }

    function testCreateProposal() public {
        string memory description = "Update sourcecode";
        string memory newUri = "https://newuri.xyz";
        uint256 duration = 1 days;

        agentDao.createProposal(description, newUri, duration);

        (uint256 id, string memory desc, string memory uri, , , , ) = agentDao
            .proposals(1);

        assertEq(id, 1);
        assertEq(desc, description);
        assertEq(uri, newUri);
    }

    function testVoteOnProposal() public {
        agentDao.transfer(owner, 1000);

        string memory description = "Change sourcecode";
        string memory newUri = "https://newuri.xyz";
        uint256 duration = 7 days;
        agentDao.createProposal(description, newUri, duration);

        vm.startPrank(owner);

        //get proposal
        (uint256 id, string memory desc, string memory uri, , , , ) = agentDao
            .proposals(1);

        console.log("Proposal created: %s", id, desc, uri);

        // owner needs to delegate votes to themselves
        agentDao.delegate(owner);

        console.log("Owner has %s votes", agentDao.getVotes(owner));

        agentDao.vote(1, true); // Vote in support of the proposal

        // Fetch proposal to check votes
        (, , , uint256 votesFor, uint256 votesAgainst, , ) = agentDao.proposals(
            1
        );

        console.log("Votes for: %s", votesFor);
        console.log("Votes against: %s", votesAgainst);

        assertTrue(votesFor > votesAgainst);
        assertEq(votesAgainst, 0);
    }

    function testExecuteProposal() public {
        agentDao.transfer(owner, 1000);

        vm.startPrank(owner);
        // Setup and vote on proposal as in previous tests
        string memory newUri = "https://newsourcecodeuri.xyz";
        agentDao.createProposal("Change URI", newUri, 1); // 1 second for quick test
        // get the proposal
        agentDao.delegate(owner);
        agentDao.vote(1, true);

        // Fast forward time to exceed proposal duration
        vm.warp(block.timestamp + 2); // Move 2 seconds into the future

        agentDao.executeProposal(1);
        
        console.log("Source code URI: %s", agentDao.sourceCodeUri());
        console.log("New URI: %s", newUri);
        assertEq(agentDao.sourceCodeUri(), newUri);
    }
}
