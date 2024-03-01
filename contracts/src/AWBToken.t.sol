// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../src/DAOToken.sol"; // Adjust the path according to your project structure

contract DAOTokenTest is Test {
    DAOToken public daoToken;
    address public mintAddress = address(1);
    uint256 public initialSupply = 1e24; // 1 million tokens, for example

    function setUp() public {
        daoToken = new DAOToken(
            "AgentsWithBenefits",
            "DAO",
            mintAddress,
            initialSupply
        );
    }

    function testInitialMint() public {
        // Check if the mintAddress received the initial supply
        assertEq(
            daoToken.balanceOf(mintAddress),
            initialSupply,
            "Initial supply was not minted correctly"
        );
    }

    function testTransfer() public {
        address recipient = address(2);
        uint256 transferAmount = 1e23; // Transfer 100k tokens

        // Simulate transfer from mintAddress to recipient
        vm.prank(mintAddress);
        daoToken.transfer(recipient, transferAmount);

        // Check balances after transfer
        assertEq(
            daoToken.balanceOf(mintAddress),
            initialSupply - transferAmount,
            "Incorrect balance for mintAddress after transfer"
        );
        assertEq(
            daoToken.balanceOf(recipient),
            transferAmount,
            "Incorrect balance for recipient after transfer"
        );
    }

    function testBurn() public {
        uint256 burnAmount = 1e23; // Burn 100k tokens

        // Simulate mintAddress burning some of its tokens
        vm.prank(mintAddress);
        daoToken.burn(burnAmount);

        // Check total supply and mintAddress balance after burn
        assertEq(
            daoToken.totalSupply(),
            initialSupply - burnAmount,
            "Incorrect total supply after burn"
        );
        assertEq(
            daoToken.balanceOf(mintAddress),
            initialSupply - burnAmount,
            "Incorrect balance for mintAddress after burn"
        );
    }

    function testVotePower() public {
        // Assuming mintAddress decides to delegate votes to itself
        vm.prank(mintAddress);
        daoToken.delegate(mintAddress);

        // Check vote power of mintAddress
        assertEq(
            daoToken.getVotes(mintAddress),
            initialSupply,
            "Incorrect vote power for mintAddress"
        );
    }
}
