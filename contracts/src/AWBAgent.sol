// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IAWBAgent.sol";

/// @custom:security-contact contact@agentswithbenefits.xyz
contract AWBAgent is IAWBAgent, ERC721, Ownable {
    string private metadataUri;
    string public description;
    string public sourceCode;
    string public license;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _metadataUri,
        string memory _description,
        string memory _sourceCode,
        string memory _license,
        address _owner
    ) ERC721(_name, _symbol) Ownable(_owner) {
        metadataUri = _metadataUri;
        description = _description;
        sourceCode = _sourceCode;
        license = _license;

        _safeMint(_owner, 1);
    }

    function updateDescription(
        string memory _description
    ) external override onlyOwner {
        description = _description;
    }

    function updateSourceCode(
        string memory _sourceCode
    ) external override onlyOwner {
        sourceCode = _sourceCode;
    }

    function updateLicense(string memory _license) external override onlyOwner {
        license = _license;
    }

    function updateMetadataURI(
        string memory _metadataURI
    ) external override onlyOwner {
        metadataUri = _metadataURI;
    }

    function tokenURI() public view returns (string memory) {
        return metadataUri;
    }

    function _baseURI() internal view override returns (string memory) {
        return metadataUri;
    }
}
