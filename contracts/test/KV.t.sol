// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/KV.sol"; // Ensure this path matches your project structure

contract KVTest is Test {
    StringKeyValue public stringKeyValue;
    address owner = address(1);
    
    function setUp() public {
        stringKeyValue = new StringKeyValue(owner);
    }

    function test_SetValueGetValue() public {
        vm.startPrank(owner);
        // Setting a value
        stringKeyValue.setValue("testKey", "testValue");
        // Retrieving the value to verify
        string memory retrievedValue = stringKeyValue.getValue("testKey");
        // Asserting the retrieved value matches the set value
        assertEq(retrievedValue, "testValue", "The value retrieved does not match the value set.");
    }

    function test_NonExistentKey() public {
    vm.startPrank(owner);
        vm.expectRevert(bytes("Value for key does not exist."));
        stringKeyValue.getValue("nonExistentKey");
    }

    function test_UpdateValue() public {
    vm.startPrank(owner);
        stringKeyValue.setValue("updateKey", "initialValue");
        stringKeyValue.setValue("updateKey", "updatedValue");
        assertEq(stringKeyValue.getValue("updateKey"), "updatedValue", "The value was not updated correctly.");
    }

    // New Test: Verify key indexing and complex query functionality
    function test_FindKeysWithValue() public {
    vm.startPrank(owner);
        // Setting up multiple keys with the same value to test the search functionality
        stringKeyValue.setValue("key1", "commonValue");
        stringKeyValue.setValue("key2", "uniqueValue");
        stringKeyValue.setValue("key3", "commonValue");

        // Attempt to retrieve keys with a specific value
        string[] memory matchingKeys = stringKeyValue.findKeysWithValue("commonValue");

        // Validate the correct keys are returned
        assertEq(matchingKeys.length, 2, "Should find two keys with the common value.");
        // Since order is deterministic as per our setValue logic, we can assert on the order
        assertEq(matchingKeys[0], "key1", "The first matching key should be 'key1'.");
        assertEq(matchingKeys[1], "key3", "The second matching key should be 'key3'.");
    }

    // Uncomment and adjust these tests if you reintroduce relevant validations in your contract
    // function test_EmptyKey() public {
    //     vm.expectRevert(bytes("Key cannot be empty"));
    //     stringKeyValue.setValue("", "value");
    // }

    // function test_EmptyValue() public {
    //     stringKeyValue.setValue("emptyValueKey", "");
    //     assertEq(stringKeyValue.getValue("emptyValueKey"), "", "The value should be empty.");
    // }

    // function test_EmptyKeyAndValue() public {
    //     vm.expectRevert(bytes("Key cannot be empty"));
    //     stringKeyValue.setValue("", "");
    // }

    // Fuzz testing for robustness under various inputs
    // function testFuzz_SetValueGetValue(string memory key, string memory value) public {
    //     // Skipping empty key cases as they are handled separately
    //     if(bytes(key).length == 0) return;
    //     stringKeyValue.setValue(key, value);
    //     assertEq(stringKeyValue.getValue(key), value, "The value retrieved does not match the value set for random inputs.");
    // }

    // function testFuzz_EmptyKeyWithValue(string memory value) public {
    //     vm.expectRevert(bytes("Key cannot be empty"));
    //     stringKeyValue.setValue("", value);
    // }
}
