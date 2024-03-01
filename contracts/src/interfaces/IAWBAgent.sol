// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IAWBAgent {
    function tokenURI() external view returns (string memory);

    function description() external view returns (string memory);

    function sourceCode() external view returns (string memory);

    function license() external view returns (string memory);

    function updateDescription(string memory _description) external;

    function updateSourceCode(string memory _sourceCode) external;

    function updateLicense(string memory _license) external;

    function updateMetadataURI(string memory _metadataURI) external;
}
