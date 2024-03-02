//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AWBRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const awbRegistryAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "_name", internalType: "string", type: "string" },
      { name: "_symbol", internalType: "string", type: "string" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "addressToUser",
    outputs: [{ name: "userAddress", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    name: "agentIdToAgent",
    outputs: [
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "daoGovernor", internalType: "address", type: "address" },
      { name: "daoToken", internalType: "address", type: "address" },
      { name: "tokenURI", internalType: "string", type: "string" },
      { name: "runPrice", internalType: "uint256", type: "uint256" },
      { name: "active", internalType: "bool", type: "bool" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    name: "agents",
    outputs: [
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "daoGovernor", internalType: "address", type: "address" },
      { name: "daoToken", internalType: "address", type: "address" },
      { name: "tokenURI", internalType: "string", type: "string" },
      { name: "runPrice", internalType: "uint256", type: "uint256" },
      { name: "active", internalType: "bool", type: "bool" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "balances",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_agentId", internalType: "uint256", type: "uint256" },
      { name: "_origin", internalType: "address", type: "address" },
      { name: "_request", internalType: "string", type: "string" },
      { name: "_result", internalType: "string", type: "string" },
      { name: "_resultURI", internalType: "string", type: "string" },
    ],
    name: "createAndFulfillRequest",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "daoGovernorToAgent",
    outputs: [
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "daoGovernor", internalType: "address", type: "address" },
      { name: "daoToken", internalType: "address", type: "address" },
      { name: "tokenURI", internalType: "string", type: "string" },
      { name: "runPrice", internalType: "uint256", type: "uint256" },
      { name: "active", internalType: "bool", type: "bool" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "_requestId", internalType: "uint256", type: "uint256" },
      { name: "_result", internalType: "string", type: "string" },
      { name: "_resultURI", internalType: "string", type: "string" },
    ],
    name: "fulfillRequest",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "fulfillerAddressToFulfiller",
    outputs: [
      { name: "name", internalType: "string", type: "string" },
      { name: "description", internalType: "string", type: "string" },
      { name: "fulfillerAddress", internalType: "address", type: "address" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    name: "fulfillers",
    outputs: [
      { name: "name", internalType: "string", type: "string" },
      { name: "description", internalType: "string", type: "string" },
      { name: "fulfillerAddress", internalType: "address", type: "address" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_id", internalType: "uint256", type: "uint256" }],
    name: "getAgentById",
    outputs: [
      {
        name: "",
        internalType: "struct AWBRegistry.Agent",
        type: "tuple",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "daoGovernor", internalType: "address", type: "address" },
          { name: "daoToken", internalType: "address", type: "address" },
          { name: "tokenURI", internalType: "string", type: "string" },
          { name: "runPrice", internalType: "uint256", type: "uint256" },
          { name: "requestIds", internalType: "uint256[]", type: "uint256[]" },
          { name: "active", internalType: "bool", type: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getAllAgents",
    outputs: [
      {
        name: "",
        internalType: "struct AWBRegistry.Agent[]",
        type: "tuple[]",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "daoGovernor", internalType: "address", type: "address" },
          { name: "daoToken", internalType: "address", type: "address" },
          { name: "tokenURI", internalType: "string", type: "string" },
          { name: "runPrice", internalType: "uint256", type: "uint256" },
          { name: "requestIds", internalType: "uint256[]", type: "uint256[]" },
          { name: "active", internalType: "bool", type: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getAllFulfillers",
    outputs: [
      {
        name: "",
        internalType: "struct AWBRegistry.Fulfiller[]",
        type: "tuple[]",
        components: [
          { name: "name", internalType: "string", type: "string" },
          { name: "description", internalType: "string", type: "string" },
          {
            name: "fulfillerAddress",
            internalType: "address",
            type: "address",
          },
          { name: "requestIds", internalType: "uint256[]", type: "uint256[]" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getAllRequests",
    outputs: [
      {
        name: "",
        internalType: "struct AWBRegistry.Request[]",
        type: "tuple[]",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "agentId", internalType: "uint256", type: "uint256" },
          { name: "origin", internalType: "address", type: "address" },
          { name: "request", internalType: "string", type: "string" },
          { name: "fulfilled", internalType: "bool", type: "bool" },
          { name: "result", internalType: "string", type: "string" },
          { name: "resultURI", internalType: "string", type: "string" },
          { name: "price", internalType: "uint256", type: "uint256" },
          { name: "fulfiller", internalType: "address", type: "address" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getAllUsers",
    outputs: [
      {
        name: "",
        internalType: "struct AWBRegistry.User[]",
        type: "tuple[]",
        components: [
          { name: "userAddress", internalType: "address", type: "address" },
          { name: "requestIds", internalType: "uint256[]", type: "uint256[]" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "getApproved",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_address", internalType: "address", type: "address" }],
    name: "getFulfillerByAddress",
    outputs: [
      {
        name: "",
        internalType: "struct AWBRegistry.Fulfiller",
        type: "tuple",
        components: [
          { name: "name", internalType: "string", type: "string" },
          { name: "description", internalType: "string", type: "string" },
          {
            name: "fulfillerAddress",
            internalType: "address",
            type: "address",
          },
          { name: "requestIds", internalType: "uint256[]", type: "uint256[]" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_id", internalType: "uint256", type: "uint256" }],
    name: "getRequestById",
    outputs: [
      {
        name: "",
        internalType: "struct AWBRegistry.Request",
        type: "tuple",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "agentId", internalType: "uint256", type: "uint256" },
          { name: "origin", internalType: "address", type: "address" },
          { name: "request", internalType: "string", type: "string" },
          { name: "fulfilled", internalType: "bool", type: "bool" },
          { name: "result", internalType: "string", type: "string" },
          { name: "resultURI", internalType: "string", type: "string" },
          { name: "price", internalType: "uint256", type: "uint256" },
          { name: "fulfiller", internalType: "address", type: "address" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_address", internalType: "address", type: "address" }],
    name: "getUserByAddress",
    outputs: [
      {
        name: "",
        internalType: "struct AWBRegistry.User",
        type: "tuple",
        components: [
          { name: "userAddress", internalType: "address", type: "address" },
          { name: "requestIds", internalType: "uint256[]", type: "uint256[]" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "operator", internalType: "address", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_daoToken", internalType: "address", type: "address" },
      { name: "_tokenURI", internalType: "string", type: "string" },
      { name: "_runPrice", internalType: "uint256", type: "uint256" },
    ],
    name: "registerAgent",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "_name", internalType: "string", type: "string" },
      { name: "_description", internalType: "string", type: "string" },
    ],
    name: "registerFulfiller",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "registerUser",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    name: "requestIdToRequest",
    outputs: [
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "agentId", internalType: "uint256", type: "uint256" },
      { name: "origin", internalType: "address", type: "address" },
      { name: "request", internalType: "string", type: "string" },
      { name: "fulfilled", internalType: "bool", type: "bool" },
      { name: "result", internalType: "string", type: "string" },
      { name: "resultURI", internalType: "string", type: "string" },
      { name: "price", internalType: "uint256", type: "uint256" },
      { name: "fulfiller", internalType: "address", type: "address" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    name: "requests",
    outputs: [
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "agentId", internalType: "uint256", type: "uint256" },
      { name: "origin", internalType: "address", type: "address" },
      { name: "request", internalType: "string", type: "string" },
      { name: "fulfilled", internalType: "bool", type: "bool" },
      { name: "result", internalType: "string", type: "string" },
      { name: "resultURI", internalType: "string", type: "string" },
      { name: "price", internalType: "uint256", type: "uint256" },
      { name: "fulfiller", internalType: "address", type: "address" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "approved", internalType: "bool", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "_agentId", internalType: "uint256", type: "uint256" },
      { name: "_request", internalType: "string", type: "string" },
      { name: "_origin", internalType: "address", type: "address" },
    ],
    name: "submitRequest",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "uri", internalType: "string", type: "string" },
    ],
    name: "updateTokenURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    name: "users",
    outputs: [{ name: "userAddress", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_amount", internalType: "uint256", type: "uint256" }],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "approved",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "ApprovalForAll",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_fromTokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "_toTokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "BatchMetadataUpdate",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "MetadataUpdate",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Transfer",
  },
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "owner", internalType: "address", type: "address" },
    ],
    name: "ERC721IncorrectOwner",
  },
  {
    type: "error",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC721InsufficientApproval",
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC721InvalidApprover",
  },
  {
    type: "error",
    inputs: [{ name: "operator", internalType: "address", type: "address" }],
    name: "ERC721InvalidOperator",
  },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "ERC721InvalidOwner",
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC721InvalidReceiver",
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC721InvalidSender",
  },
  {
    type: "error",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "ERC721NonexistentToken",
  },
] as const;

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const awbRegistryAddress = {
  84532: "0x8aB1d92130774f55CE93222f62F2e213366e24a7",
} as const;

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const awbRegistryConfig = {
  address: awbRegistryAddress,
  abi: awbRegistryAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DAOGovernor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const daoGovernorAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "_name", internalType: "string", type: "string" },
      { name: "_token", internalType: "contract IVotes", type: "address" },
      { name: "_votingDelay", internalType: "uint256", type: "uint256" },
      { name: "_votingPeriod", internalType: "uint256", type: "uint256" },
      { name: "_proposalThreshold", internalType: "uint256", type: "uint256" },
      { name: "_quorumVotes", internalType: "uint256", type: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  { type: "receive", stateMutability: "payable" },
  {
    type: "function",
    inputs: [],
    name: "BALLOT_TYPEHASH",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "CLOCK_MODE",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "COUNTING_MODE",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [],
    name: "EXTENDED_BALLOT_TYPEHASH",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "targets", internalType: "address[]", type: "address[]" },
      { name: "values", internalType: "uint256[]", type: "uint256[]" },
      { name: "calldatas", internalType: "bytes[]", type: "bytes[]" },
      { name: "descriptionHash", internalType: "bytes32", type: "bytes32" },
    ],
    name: "cancel",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "proposalId", internalType: "uint256", type: "uint256" },
      { name: "support", internalType: "uint8", type: "uint8" },
    ],
    name: "castVote",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "proposalId", internalType: "uint256", type: "uint256" },
      { name: "support", internalType: "uint8", type: "uint8" },
      { name: "voter", internalType: "address", type: "address" },
      { name: "signature", internalType: "bytes", type: "bytes" },
    ],
    name: "castVoteBySig",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "proposalId", internalType: "uint256", type: "uint256" },
      { name: "support", internalType: "uint8", type: "uint8" },
      { name: "reason", internalType: "string", type: "string" },
    ],
    name: "castVoteWithReason",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "proposalId", internalType: "uint256", type: "uint256" },
      { name: "support", internalType: "uint8", type: "uint8" },
      { name: "reason", internalType: "string", type: "string" },
      { name: "params", internalType: "bytes", type: "bytes" },
    ],
    name: "castVoteWithReasonAndParams",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "proposalId", internalType: "uint256", type: "uint256" },
      { name: "support", internalType: "uint8", type: "uint8" },
      { name: "voter", internalType: "address", type: "address" },
      { name: "reason", internalType: "string", type: "string" },
      { name: "params", internalType: "bytes", type: "bytes" },
      { name: "signature", internalType: "bytes", type: "bytes" },
    ],
    name: "castVoteWithReasonAndParamsBySig",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "clock",
    outputs: [{ name: "", internalType: "uint48", type: "uint48" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { name: "fields", internalType: "bytes1", type: "bytes1" },
      { name: "name", internalType: "string", type: "string" },
      { name: "version", internalType: "string", type: "string" },
      { name: "chainId", internalType: "uint256", type: "uint256" },
      { name: "verifyingContract", internalType: "address", type: "address" },
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "extensions", internalType: "uint256[]", type: "uint256[]" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "targets", internalType: "address[]", type: "address[]" },
      { name: "values", internalType: "uint256[]", type: "uint256[]" },
      { name: "calldatas", internalType: "bytes[]", type: "bytes[]" },
      { name: "descriptionHash", internalType: "bytes32", type: "bytes32" },
    ],
    name: "execute",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "timepoint", internalType: "uint256", type: "uint256" },
    ],
    name: "getVotes",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "timepoint", internalType: "uint256", type: "uint256" },
      { name: "params", internalType: "bytes", type: "bytes" },
    ],
    name: "getVotesWithParams",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "proposalId", internalType: "uint256", type: "uint256" },
      { name: "account", internalType: "address", type: "address" },
    ],
    name: "hasVoted",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "targets", internalType: "address[]", type: "address[]" },
      { name: "values", internalType: "uint256[]", type: "uint256[]" },
      { name: "calldatas", internalType: "bytes[]", type: "bytes[]" },
      { name: "descriptionHash", internalType: "bytes32", type: "bytes32" },
    ],
    name: "hashProposal",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "nonces",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256[]", type: "uint256[]" },
      { name: "", internalType: "uint256[]", type: "uint256[]" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC1155BatchReceived",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC1155Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC721Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "proposalId", internalType: "uint256", type: "uint256" }],
    name: "proposalDeadline",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "proposalId", internalType: "uint256", type: "uint256" }],
    name: "proposalEta",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    name: "proposalNeedsQueuing",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "proposalId", internalType: "uint256", type: "uint256" }],
    name: "proposalProposer",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "proposalId", internalType: "uint256", type: "uint256" }],
    name: "proposalSnapshot",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "proposalThreshold",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "proposalId", internalType: "uint256", type: "uint256" }],
    name: "proposalVotes",
    outputs: [
      { name: "againstVotes", internalType: "uint256", type: "uint256" },
      { name: "forVotes", internalType: "uint256", type: "uint256" },
      { name: "abstainVotes", internalType: "uint256", type: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "targets", internalType: "address[]", type: "address[]" },
      { name: "values", internalType: "uint256[]", type: "uint256[]" },
      { name: "calldatas", internalType: "bytes[]", type: "bytes[]" },
      { name: "description", internalType: "string", type: "string" },
    ],
    name: "propose",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "targets", internalType: "address[]", type: "address[]" },
      { name: "values", internalType: "uint256[]", type: "uint256[]" },
      { name: "calldatas", internalType: "bytes[]", type: "bytes[]" },
      { name: "descriptionHash", internalType: "bytes32", type: "bytes32" },
    ],
    name: "queue",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "blockNumber", internalType: "uint256", type: "uint256" }],
    name: "quorum",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "quorumDenominator",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "timepoint", internalType: "uint256", type: "uint256" }],
    name: "quorumNumerator",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "quorumNumerator",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "target", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "relay",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "proposalId", internalType: "uint256", type: "uint256" }],
    name: "state",
    outputs: [{ name: "", internalType: "enum IGovernor.ProposalState", type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "token",
    outputs: [{ name: "", internalType: "contract IERC5805", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "newQuorumNumerator", internalType: "uint256", type: "uint256" }],
    name: "updateQuorumNumerator",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "version",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "votingDelay",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "votingPeriod",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  { type: "event", anonymous: false, inputs: [], name: "EIP712DomainChanged" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "proposalId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "ProposalCanceled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "proposalId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "proposer",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "targets",
        internalType: "address[]",
        type: "address[]",
        indexed: false,
      },
      {
        name: "values",
        internalType: "uint256[]",
        type: "uint256[]",
        indexed: false,
      },
      {
        name: "signatures",
        internalType: "string[]",
        type: "string[]",
        indexed: false,
      },
      {
        name: "calldatas",
        internalType: "bytes[]",
        type: "bytes[]",
        indexed: false,
      },
      {
        name: "voteStart",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "voteEnd",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "description",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "ProposalCreated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "proposalId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "ProposalExecuted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "proposalId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "etaSeconds",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "ProposalQueued",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "oldQuorumNumerator",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "newQuorumNumerator",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "QuorumNumeratorUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "voter",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "proposalId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      { name: "support", internalType: "uint8", type: "uint8", indexed: false },
      {
        name: "weight",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "reason",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "VoteCast",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "voter",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "proposalId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      { name: "support", internalType: "uint8", type: "uint8", indexed: false },
      {
        name: "weight",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "reason",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      { name: "params", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "VoteCastWithParams",
  },
  { type: "error", inputs: [], name: "CheckpointUnorderedInsertion" },
  { type: "error", inputs: [], name: "FailedInnerCall" },
  {
    type: "error",
    inputs: [{ name: "voter", internalType: "address", type: "address" }],
    name: "GovernorAlreadyCastVote",
  },
  {
    type: "error",
    inputs: [{ name: "proposalId", internalType: "uint256", type: "uint256" }],
    name: "GovernorAlreadyQueuedProposal",
  },
  { type: "error", inputs: [], name: "GovernorDisabledDeposit" },
  {
    type: "error",
    inputs: [
      { name: "proposer", internalType: "address", type: "address" },
      { name: "votes", internalType: "uint256", type: "uint256" },
      { name: "threshold", internalType: "uint256", type: "uint256" },
    ],
    name: "GovernorInsufficientProposerVotes",
  },
  {
    type: "error",
    inputs: [
      { name: "targets", internalType: "uint256", type: "uint256" },
      { name: "calldatas", internalType: "uint256", type: "uint256" },
      { name: "values", internalType: "uint256", type: "uint256" },
    ],
    name: "GovernorInvalidProposalLength",
  },
  {
    type: "error",
    inputs: [
      { name: "quorumNumerator", internalType: "uint256", type: "uint256" },
      { name: "quorumDenominator", internalType: "uint256", type: "uint256" },
    ],
    name: "GovernorInvalidQuorumFraction",
  },
  {
    type: "error",
    inputs: [{ name: "voter", internalType: "address", type: "address" }],
    name: "GovernorInvalidSignature",
  },
  { type: "error", inputs: [], name: "GovernorInvalidVoteType" },
  {
    type: "error",
    inputs: [{ name: "votingPeriod", internalType: "uint256", type: "uint256" }],
    name: "GovernorInvalidVotingPeriod",
  },
  {
    type: "error",
    inputs: [{ name: "proposalId", internalType: "uint256", type: "uint256" }],
    name: "GovernorNonexistentProposal",
  },
  {
    type: "error",
    inputs: [{ name: "proposalId", internalType: "uint256", type: "uint256" }],
    name: "GovernorNotQueuedProposal",
  },
  {
    type: "error",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "GovernorOnlyExecutor",
  },
  {
    type: "error",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "GovernorOnlyProposer",
  },
  { type: "error", inputs: [], name: "GovernorQueueNotImplemented" },
  {
    type: "error",
    inputs: [{ name: "proposer", internalType: "address", type: "address" }],
    name: "GovernorRestrictedProposer",
  },
  {
    type: "error",
    inputs: [
      { name: "proposalId", internalType: "uint256", type: "uint256" },
      {
        name: "current",
        internalType: "enum IGovernor.ProposalState",
        type: "uint8",
      },
      { name: "expectedStates", internalType: "bytes32", type: "bytes32" },
    ],
    name: "GovernorUnexpectedProposalState",
  },
  {
    type: "error",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "currentNonce", internalType: "uint256", type: "uint256" },
    ],
    name: "InvalidAccountNonce",
  },
  { type: "error", inputs: [], name: "InvalidShortString" },
  { type: "error", inputs: [], name: "QueueEmpty" },
  { type: "error", inputs: [], name: "QueueFull" },
  {
    type: "error",
    inputs: [
      { name: "bits", internalType: "uint8", type: "uint8" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "SafeCastOverflowedUintDowncast",
  },
  {
    type: "error",
    inputs: [{ name: "str", internalType: "string", type: "string" }],
    name: "StringTooLong",
  },
] as const;

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const daoGovernorAddress = {
  84532: "0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f",
} as const;

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const daoGovernorConfig = {
  address: daoGovernorAddress,
  abi: daoGovernorAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DAOToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const daoTokenAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "_name", internalType: "string", type: "string" },
      { name: "_symbol", internalType: "string", type: "string" },
      { name: "_mintAddress", internalType: "address", type: "address" },
      { name: "_totalSupply", internalType: "uint256", type: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "CLOCK_MODE",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "value", internalType: "uint256", type: "uint256" }],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "pos", internalType: "uint32", type: "uint32" },
    ],
    name: "checkpoints",
    outputs: [
      {
        name: "",
        internalType: "struct Checkpoints.Checkpoint208",
        type: "tuple",
        components: [
          { name: "_key", internalType: "uint48", type: "uint48" },
          { name: "_value", internalType: "uint208", type: "uint208" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "clock",
    outputs: [{ name: "", internalType: "uint48", type: "uint48" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "delegatee", internalType: "address", type: "address" }],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "delegatee", internalType: "address", type: "address" },
      { name: "nonce", internalType: "uint256", type: "uint256" },
      { name: "expiry", internalType: "uint256", type: "uint256" },
      { name: "v", internalType: "uint8", type: "uint8" },
      { name: "r", internalType: "bytes32", type: "bytes32" },
      { name: "s", internalType: "bytes32", type: "bytes32" },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "delegates",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { name: "fields", internalType: "bytes1", type: "bytes1" },
      { name: "name", internalType: "string", type: "string" },
      { name: "version", internalType: "string", type: "string" },
      { name: "chainId", internalType: "uint256", type: "uint256" },
      { name: "verifyingContract", internalType: "address", type: "address" },
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "extensions", internalType: "uint256[]", type: "uint256[]" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "timepoint", internalType: "uint256", type: "uint256" }],
    name: "getPastTotalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "timepoint", internalType: "uint256", type: "uint256" },
    ],
    name: "getPastVotes",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "getVotes",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "nonces",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "numCheckpoints",
    outputs: [{ name: "", internalType: "uint32", type: "uint32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "deadline", internalType: "uint256", type: "uint256" },
      { name: "v", internalType: "uint8", type: "uint8" },
      { name: "r", internalType: "bytes32", type: "bytes32" },
      { name: "s", internalType: "bytes32", type: "bytes32" },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "delegator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "fromDelegate",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "toDelegate",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "DelegateChanged",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "delegate",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "previousVotes",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "newVotes",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "DelegateVotesChanged",
  },
  { type: "event", anonymous: false, inputs: [], name: "EIP712DomainChanged" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
  { type: "error", inputs: [], name: "CheckpointUnorderedInsertion" },
  { type: "error", inputs: [], name: "ECDSAInvalidSignature" },
  {
    type: "error",
    inputs: [{ name: "length", internalType: "uint256", type: "uint256" }],
    name: "ECDSAInvalidSignatureLength",
  },
  {
    type: "error",
    inputs: [{ name: "s", internalType: "bytes32", type: "bytes32" }],
    name: "ECDSAInvalidSignatureS",
  },
  {
    type: "error",
    inputs: [
      { name: "increasedSupply", internalType: "uint256", type: "uint256" },
      { name: "cap", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20ExceededSafeSupply",
  },
  {
    type: "error",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "allowance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientAllowance",
  },
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "balance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientBalance",
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC20InvalidApprover",
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC20InvalidReceiver",
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSender",
  },
  {
    type: "error",
    inputs: [{ name: "spender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSpender",
  },
  {
    type: "error",
    inputs: [{ name: "deadline", internalType: "uint256", type: "uint256" }],
    name: "ERC2612ExpiredSignature",
  },
  {
    type: "error",
    inputs: [
      { name: "signer", internalType: "address", type: "address" },
      { name: "owner", internalType: "address", type: "address" },
    ],
    name: "ERC2612InvalidSigner",
  },
  {
    type: "error",
    inputs: [
      { name: "timepoint", internalType: "uint256", type: "uint256" },
      { name: "clock", internalType: "uint48", type: "uint48" },
    ],
    name: "ERC5805FutureLookup",
  },
  { type: "error", inputs: [], name: "ERC6372InconsistentClock" },
  {
    type: "error",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "currentNonce", internalType: "uint256", type: "uint256" },
    ],
    name: "InvalidAccountNonce",
  },
  { type: "error", inputs: [], name: "InvalidShortString" },
  {
    type: "error",
    inputs: [
      { name: "bits", internalType: "uint8", type: "uint8" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "SafeCastOverflowedUintDowncast",
  },
  {
    type: "error",
    inputs: [{ name: "str", internalType: "string", type: "string" }],
    name: "StringTooLong",
  },
  {
    type: "error",
    inputs: [{ name: "expiry", internalType: "uint256", type: "uint256" }],
    name: "VotesExpiredSignature",
  },
] as const;

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const daoTokenAddress = {
  84532: "0x1E4b432b90903ea6048a30C39d634b48d81EA538",
} as const;

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const daoTokenConfig = {
  address: daoTokenAddress,
  abi: daoTokenAbi,
} as const;
