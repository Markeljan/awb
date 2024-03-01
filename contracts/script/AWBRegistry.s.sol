// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/AWBRegistry.sol";

contract DeployAWBRegistry is Script {
    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        // Deploy the AWBRegistry contract
        AWBRegistry registry = new AWBRegistry("Agents With Benefits", "AWB");
        console.log("AWBRegistry deployed to:", address(registry));

        vm.stopBroadcast();
    }
}
