// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/AWBToken.sol";

contract DeployAWBToken is Script {
    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        // Parameters for the AWBToken constructor
        string memory name = "Agents With Benefits Token";
        string memory symbol = "AWB";
        address mintAddress = msg.sender; // The deploying address will receive the initial supply
        uint256 totalSupply = 1e24; // For example, 1 million tokens with 18 decimal places

        // Deploy the AWBToken contract
        AWBToken token = new AWBToken(name, symbol, mintAddress, totalSupply);
        console.log("AWBToken deployed to:", address(token));

        vm.stopBroadcast();
    }
}
