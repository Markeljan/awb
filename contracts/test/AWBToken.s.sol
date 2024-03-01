// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../src/AWBToken.sol"; // Adjust the path according to your project structure

contract AWBTokenTest is Test {
    AWBToken public awbToken;
    address public mintAddress = address(1);
    uint256 public initialSupply = 1e24; // 1 million tokens, for example

    function setUp() public {
        awbToken = new AWBToken(
            "AgentsWithBenefits",
            "AWB",
            mintAddress,
            initialSupply
        );
    }

    function testInitialMint() public {
        // Check if the mintAddress received the initial supply
        assertEq(
            awbToken.balanceOf(mintAddress),
            initialSupply,
            "Initial supply was not minted correctly"
        );
    }

    function testTransfer() public {
        address recipient = address(2);
        uint256 transferAmount = 1e23; // Transfer 100k tokens

        // Simulate transfer from mintAddress to recipient
        vm.prank(mintAddress);
        awbToken.transfer(recipient, transferAmount);

        // Check balances after transfer
        assertEq(
            awbToken.balanceOf(mintAddress),
            initialSupply - transferAmount,
            "Incorrect balance for mintAddress after transfer"
        );
        assertEq(
            awbToken.balanceOf(recipient),
            transferAmount,
            "Incorrect balance for recipient after transfer"
        );
    }

    function testBurn() public {
        uint256 burnAmount = 1e23; // Burn 100k tokens

        // Simulate mintAddress burning some of its tokens
        vm.prank(mintAddress);
        awbToken.burn(burnAmount);

        // Check total supply and mintAddress balance after burn
        assertEq(
            awbToken.totalSupply(),
            initialSupply - burnAmount,
            "Incorrect total supply after burn"
        );
        assertEq(
            awbToken.balanceOf(mintAddress),
            initialSupply - burnAmount,
            "Incorrect balance for mintAddress after burn"
        );
    }

    function testVotePower() public {
        // Assuming mintAddress decides to delegate votes to itself
        vm.prank(mintAddress);
        awbToken.delegate(mintAddress);

        // Check vote power of mintAddress
        assertEq(
            awbToken.getVotes(mintAddress),
            initialSupply,
            "Incorrect vote power for mintAddress"
        );
    }
}
