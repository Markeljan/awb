// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";

contract StringKeyValue is Ownable {
    mapping(string => string) private values;
    string[] private keys;

    event ValueUpdated(string key, string newValue);

    constructor(address _owner) Ownable(_owner) {}

    function setValue(string memory key, string memory newValue) public onlyOwner {
        if(bytes(values[key]).length == 0) {
            keys.push(key);
        }
        values[key] = newValue;
        emit ValueUpdated(key, newValue);
    }

    function getValue(string memory key) public view returns (string memory) {
        require(bytes(values[key]).length > 0, "Value for key does not exist.");
        return values[key];
    }

    function findKeysWithValue(string memory valuePattern) public view returns (string[] memory) {
        uint256 matchCount = 0;
        for(uint256 i = 0; i < keys.length; i++) {
            if(keccak256(bytes(values[keys[i]])) == keccak256(bytes(valuePattern))) {
                matchCount++;
            }
        }

        string[] memory matchingKeys = new string[](matchCount);
        if(matchCount > 0) {
            uint256 index = 0;
            for(uint256 i = 0; i < keys.length; i++) {
                if(keccak256(bytes(values[keys[i]])) == keccak256(bytes(valuePattern))) {
                    matchingKeys[index] = keys[i];
                    index++;
                }
            }
        }

        return matchingKeys;
    }
}
