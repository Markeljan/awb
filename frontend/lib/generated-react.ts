import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from "wagmi/codegen";

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistry = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"addressToUser"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryAddressToUser = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "addressToUser",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"agentIdToAgent"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryAgentIdToAgent = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "agentIdToAgent",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"agents"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryAgents = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "agents",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "balanceOf",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"balances"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryBalances = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "balances",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"daoGovernorToAgent"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryDaoGovernorToAgent = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "daoGovernorToAgent",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"fulfillerAddressToFulfiller"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryFulfillerAddressToFulfiller = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "fulfillerAddressToFulfiller",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"fulfillers"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryFulfillers = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "fulfillers",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"getAgentById"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryGetAgentById = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "getAgentById",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"getAllAgents"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryGetAllAgents = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "getAllAgents",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"getAllFulfillers"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryGetAllFulfillers = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "getAllFulfillers",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"getAllRequests"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryGetAllRequests = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "getAllRequests",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"getAllUsers"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryGetAllUsers = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "getAllUsers",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"getApproved"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryGetApproved = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "getApproved",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"getFulfillerByAddress"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryGetFulfillerByAddress = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "getFulfillerByAddress",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"getRequestById"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryGetRequestById = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "getRequestById",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"getUserByAddress"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryGetUserByAddress = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "getUserByAddress",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"isApprovedForAll"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryIsApprovedForAll = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "isApprovedForAll",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryName = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "name",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"ownerOf"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "ownerOf",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"requestIdToRequest"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryRequestIdToRequest = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "requestIdToRequest",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"requests"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryRequests = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "requests",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistrySupportsInterface = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "supportsInterface",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistrySymbol = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "symbol",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"tokenURI"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "tokenURI",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"users"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useReadAwbRegistryUsers = /*#__PURE__*/ createUseReadContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "users",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link awbRegistryAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useWriteAwbRegistry = /*#__PURE__*/ createUseWriteContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useWriteAwbRegistryApprove = /*#__PURE__*/ createUseWriteContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "approve",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"createAndFulfillRequest"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useWriteAwbRegistryCreateAndFulfillRequest = /*#__PURE__*/ createUseWriteContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "createAndFulfillRequest",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"deposit"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useWriteAwbRegistryDeposit = /*#__PURE__*/ createUseWriteContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "deposit",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"fulfillRequest"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useWriteAwbRegistryFulfillRequest = /*#__PURE__*/ createUseWriteContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "fulfillRequest",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"registerAgent"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useWriteAwbRegistryRegisterAgent = /*#__PURE__*/ createUseWriteContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "registerAgent",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"registerFulfiller"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useWriteAwbRegistryRegisterFulfiller = /*#__PURE__*/ createUseWriteContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "registerFulfiller",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"registerUser"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useWriteAwbRegistryRegisterUser = /*#__PURE__*/ createUseWriteContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "registerUser",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useWriteAwbRegistrySafeTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "safeTransferFrom",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useWriteAwbRegistrySetApprovalForAll = /*#__PURE__*/ createUseWriteContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "setApprovalForAll",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"submitRequest"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useWriteAwbRegistrySubmitRequest = /*#__PURE__*/ createUseWriteContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "submitRequest",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useWriteAwbRegistryTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "transferFrom",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"updateTokenURI"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useWriteAwbRegistryUpdateTokenUri = /*#__PURE__*/ createUseWriteContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "updateTokenURI",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useWriteAwbRegistryWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "withdraw",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link awbRegistryAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useSimulateAwbRegistry = /*#__PURE__*/ createUseSimulateContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useSimulateAwbRegistryApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "approve",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"createAndFulfillRequest"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useSimulateAwbRegistryCreateAndFulfillRequest = /*#__PURE__*/ createUseSimulateContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "createAndFulfillRequest",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"deposit"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useSimulateAwbRegistryDeposit = /*#__PURE__*/ createUseSimulateContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "deposit",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"fulfillRequest"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useSimulateAwbRegistryFulfillRequest = /*#__PURE__*/ createUseSimulateContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "fulfillRequest",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"registerAgent"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useSimulateAwbRegistryRegisterAgent = /*#__PURE__*/ createUseSimulateContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "registerAgent",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"registerFulfiller"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useSimulateAwbRegistryRegisterFulfiller = /*#__PURE__*/ createUseSimulateContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "registerFulfiller",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"registerUser"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useSimulateAwbRegistryRegisterUser = /*#__PURE__*/ createUseSimulateContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "registerUser",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useSimulateAwbRegistrySafeTransferFrom = /*#__PURE__*/ createUseSimulateContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "safeTransferFrom",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useSimulateAwbRegistrySetApprovalForAll = /*#__PURE__*/ createUseSimulateContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "setApprovalForAll",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"submitRequest"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useSimulateAwbRegistrySubmitRequest = /*#__PURE__*/ createUseSimulateContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "submitRequest",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useSimulateAwbRegistryTransferFrom = /*#__PURE__*/ createUseSimulateContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "transferFrom",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"updateTokenURI"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useSimulateAwbRegistryUpdateTokenUri = /*#__PURE__*/ createUseSimulateContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "updateTokenURI",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link awbRegistryAbi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useSimulateAwbRegistryWithdraw = /*#__PURE__*/ createUseSimulateContract({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  functionName: "withdraw",
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link awbRegistryAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useWatchAwbRegistryEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link awbRegistryAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useWatchAwbRegistryApprovalEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  eventName: "Approval",
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link awbRegistryAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useWatchAwbRegistryApprovalForAllEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  eventName: "ApprovalForAll",
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link awbRegistryAbi}__ and `eventName` set to `"BatchMetadataUpdate"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useWatchAwbRegistryBatchMetadataUpdateEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  eventName: "BatchMetadataUpdate",
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link awbRegistryAbi}__ and `eventName` set to `"MetadataUpdate"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useWatchAwbRegistryMetadataUpdateEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  eventName: "MetadataUpdate",
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link awbRegistryAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x8aB1d92130774f55CE93222f62F2e213366e24a7)
 */
export const useWatchAwbRegistryTransferEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: awbRegistryAbi,
  address: awbRegistryAddress,
  eventName: "Transfer",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernor = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"BALLOT_TYPEHASH"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorBallotTypehash = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "BALLOT_TYPEHASH",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"CLOCK_MODE"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorClockMode = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "CLOCK_MODE",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"COUNTING_MODE"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorCountingMode = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "COUNTING_MODE",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"EXTENDED_BALLOT_TYPEHASH"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorExtendedBallotTypehash = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "EXTENDED_BALLOT_TYPEHASH",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"clock"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorClock = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "clock",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"eip712Domain"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorEip712Domain = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "eip712Domain",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"getVotes"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorGetVotes = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "getVotes",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"getVotesWithParams"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorGetVotesWithParams = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "getVotesWithParams",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"hasVoted"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorHasVoted = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "hasVoted",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"hashProposal"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorHashProposal = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "hashProposal",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorName = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "name",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"nonces"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorNonces = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "nonces",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"proposalDeadline"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorProposalDeadline = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "proposalDeadline",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"proposalEta"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorProposalEta = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "proposalEta",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"proposalNeedsQueuing"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorProposalNeedsQueuing = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "proposalNeedsQueuing",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"proposalProposer"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorProposalProposer = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "proposalProposer",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"proposalSnapshot"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorProposalSnapshot = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "proposalSnapshot",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"proposalThreshold"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorProposalThreshold = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "proposalThreshold",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"proposalVotes"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorProposalVotes = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "proposalVotes",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"quorum"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorQuorum = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "quorum",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"quorumDenominator"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorQuorumDenominator = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "quorumDenominator",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"quorumNumerator"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorQuorumNumerator = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "quorumNumerator",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"state"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorState = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "state",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorSupportsInterface = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "supportsInterface",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"token"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorToken = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "token",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"version"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorVersion = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "version",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"votingDelay"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorVotingDelay = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "votingDelay",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"votingPeriod"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useReadDaoGovernorVotingPeriod = /*#__PURE__*/ createUseReadContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "votingPeriod",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoGovernorAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWriteDaoGovernor = /*#__PURE__*/ createUseWriteContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"cancel"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWriteDaoGovernorCancel = /*#__PURE__*/ createUseWriteContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "cancel",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"castVote"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWriteDaoGovernorCastVote = /*#__PURE__*/ createUseWriteContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "castVote",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"castVoteBySig"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWriteDaoGovernorCastVoteBySig = /*#__PURE__*/ createUseWriteContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "castVoteBySig",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"castVoteWithReason"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWriteDaoGovernorCastVoteWithReason = /*#__PURE__*/ createUseWriteContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "castVoteWithReason",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWriteDaoGovernorCastVoteWithReasonAndParams = /*#__PURE__*/ createUseWriteContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "castVoteWithReasonAndParams",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWriteDaoGovernorCastVoteWithReasonAndParamsBySig = /*#__PURE__*/ createUseWriteContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "castVoteWithReasonAndParamsBySig",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"execute"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWriteDaoGovernorExecute = /*#__PURE__*/ createUseWriteContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "execute",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWriteDaoGovernorOnErc1155BatchReceived = /*#__PURE__*/ createUseWriteContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "onERC1155BatchReceived",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"onERC1155Received"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWriteDaoGovernorOnErc1155Received = /*#__PURE__*/ createUseWriteContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "onERC1155Received",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"onERC721Received"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWriteDaoGovernorOnErc721Received = /*#__PURE__*/ createUseWriteContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "onERC721Received",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"propose"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWriteDaoGovernorPropose = /*#__PURE__*/ createUseWriteContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "propose",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"queue"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWriteDaoGovernorQueue = /*#__PURE__*/ createUseWriteContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "queue",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"relay"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWriteDaoGovernorRelay = /*#__PURE__*/ createUseWriteContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "relay",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"updateQuorumNumerator"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWriteDaoGovernorUpdateQuorumNumerator = /*#__PURE__*/ createUseWriteContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "updateQuorumNumerator",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoGovernorAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useSimulateDaoGovernor = /*#__PURE__*/ createUseSimulateContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"cancel"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useSimulateDaoGovernorCancel = /*#__PURE__*/ createUseSimulateContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "cancel",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"castVote"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useSimulateDaoGovernorCastVote = /*#__PURE__*/ createUseSimulateContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "castVote",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"castVoteBySig"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useSimulateDaoGovernorCastVoteBySig = /*#__PURE__*/ createUseSimulateContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "castVoteBySig",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"castVoteWithReason"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useSimulateDaoGovernorCastVoteWithReason = /*#__PURE__*/ createUseSimulateContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "castVoteWithReason",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"castVoteWithReasonAndParams"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useSimulateDaoGovernorCastVoteWithReasonAndParams = /*#__PURE__*/ createUseSimulateContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "castVoteWithReasonAndParams",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"castVoteWithReasonAndParamsBySig"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useSimulateDaoGovernorCastVoteWithReasonAndParamsBySig = /*#__PURE__*/ createUseSimulateContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "castVoteWithReasonAndParamsBySig",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"execute"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useSimulateDaoGovernorExecute = /*#__PURE__*/ createUseSimulateContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "execute",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useSimulateDaoGovernorOnErc1155BatchReceived = /*#__PURE__*/ createUseSimulateContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "onERC1155BatchReceived",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"onERC1155Received"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useSimulateDaoGovernorOnErc1155Received = /*#__PURE__*/ createUseSimulateContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "onERC1155Received",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"onERC721Received"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useSimulateDaoGovernorOnErc721Received = /*#__PURE__*/ createUseSimulateContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "onERC721Received",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"propose"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useSimulateDaoGovernorPropose = /*#__PURE__*/ createUseSimulateContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "propose",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"queue"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useSimulateDaoGovernorQueue = /*#__PURE__*/ createUseSimulateContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "queue",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"relay"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useSimulateDaoGovernorRelay = /*#__PURE__*/ createUseSimulateContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "relay",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoGovernorAbi}__ and `functionName` set to `"updateQuorumNumerator"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useSimulateDaoGovernorUpdateQuorumNumerator = /*#__PURE__*/ createUseSimulateContract({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  functionName: "updateQuorumNumerator",
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link daoGovernorAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWatchDaoGovernorEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link daoGovernorAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWatchDaoGovernorEip712DomainChangedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  eventName: "EIP712DomainChanged",
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link daoGovernorAbi}__ and `eventName` set to `"ProposalCanceled"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWatchDaoGovernorProposalCanceledEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  eventName: "ProposalCanceled",
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link daoGovernorAbi}__ and `eventName` set to `"ProposalCreated"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWatchDaoGovernorProposalCreatedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  eventName: "ProposalCreated",
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link daoGovernorAbi}__ and `eventName` set to `"ProposalExecuted"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWatchDaoGovernorProposalExecutedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  eventName: "ProposalExecuted",
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link daoGovernorAbi}__ and `eventName` set to `"ProposalQueued"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWatchDaoGovernorProposalQueuedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  eventName: "ProposalQueued",
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link daoGovernorAbi}__ and `eventName` set to `"QuorumNumeratorUpdated"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWatchDaoGovernorQuorumNumeratorUpdatedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  eventName: "QuorumNumeratorUpdated",
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link daoGovernorAbi}__ and `eventName` set to `"VoteCast"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWatchDaoGovernorVoteCastEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  eventName: "VoteCast",
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link daoGovernorAbi}__ and `eventName` set to `"VoteCastWithParams"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f)
 */
export const useWatchDaoGovernorVoteCastWithParamsEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: daoGovernorAbi,
  address: daoGovernorAddress,
  eventName: "VoteCastWithParams",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoTokenAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useReadDaoToken = /*#__PURE__*/ createUseReadContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"CLOCK_MODE"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useReadDaoTokenClockMode = /*#__PURE__*/ createUseReadContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "CLOCK_MODE",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useReadDaoTokenDomainSeparator = /*#__PURE__*/ createUseReadContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "DOMAIN_SEPARATOR",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useReadDaoTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "allowance",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useReadDaoTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "balanceOf",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"checkpoints"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useReadDaoTokenCheckpoints = /*#__PURE__*/ createUseReadContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "checkpoints",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"clock"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useReadDaoTokenClock = /*#__PURE__*/ createUseReadContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "clock",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useReadDaoTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "decimals",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"delegates"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useReadDaoTokenDelegates = /*#__PURE__*/ createUseReadContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "delegates",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"eip712Domain"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useReadDaoTokenEip712Domain = /*#__PURE__*/ createUseReadContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "eip712Domain",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"getPastTotalSupply"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useReadDaoTokenGetPastTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "getPastTotalSupply",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"getPastVotes"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useReadDaoTokenGetPastVotes = /*#__PURE__*/ createUseReadContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "getPastVotes",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"getVotes"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useReadDaoTokenGetVotes = /*#__PURE__*/ createUseReadContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "getVotes",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useReadDaoTokenName = /*#__PURE__*/ createUseReadContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "name",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"nonces"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useReadDaoTokenNonces = /*#__PURE__*/ createUseReadContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "nonces",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"numCheckpoints"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useReadDaoTokenNumCheckpoints = /*#__PURE__*/ createUseReadContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "numCheckpoints",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useReadDaoTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "symbol",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useReadDaoTokenTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "totalSupply",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoTokenAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useWriteDaoToken = /*#__PURE__*/ createUseWriteContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useWriteDaoTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "approve",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"burn"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useWriteDaoTokenBurn = /*#__PURE__*/ createUseWriteContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "burn",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"burnFrom"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useWriteDaoTokenBurnFrom = /*#__PURE__*/ createUseWriteContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "burnFrom",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useWriteDaoTokenDelegate = /*#__PURE__*/ createUseWriteContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "delegate",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useWriteDaoTokenDelegateBySig = /*#__PURE__*/ createUseWriteContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "delegateBySig",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"permit"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useWriteDaoTokenPermit = /*#__PURE__*/ createUseWriteContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "permit",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useWriteDaoTokenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "transfer",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useWriteDaoTokenTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "transferFrom",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoTokenAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useSimulateDaoToken = /*#__PURE__*/ createUseSimulateContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useSimulateDaoTokenApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "approve",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"burn"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useSimulateDaoTokenBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "burn",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"burnFrom"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useSimulateDaoTokenBurnFrom = /*#__PURE__*/ createUseSimulateContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "burnFrom",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useSimulateDaoTokenDelegate = /*#__PURE__*/ createUseSimulateContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "delegate",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useSimulateDaoTokenDelegateBySig = /*#__PURE__*/ createUseSimulateContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "delegateBySig",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"permit"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useSimulateDaoTokenPermit = /*#__PURE__*/ createUseSimulateContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "permit",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useSimulateDaoTokenTransfer = /*#__PURE__*/ createUseSimulateContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "transfer",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link daoTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useSimulateDaoTokenTransferFrom = /*#__PURE__*/ createUseSimulateContract({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  functionName: "transferFrom",
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link daoTokenAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useWatchDaoTokenEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: daoTokenAbi,
  address: daoTokenAddress,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link daoTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useWatchDaoTokenApprovalEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  eventName: "Approval",
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link daoTokenAbi}__ and `eventName` set to `"DelegateChanged"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useWatchDaoTokenDelegateChangedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  eventName: "DelegateChanged",
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link daoTokenAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useWatchDaoTokenDelegateVotesChangedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  eventName: "DelegateVotesChanged",
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link daoTokenAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useWatchDaoTokenEip712DomainChangedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  eventName: "EIP712DomainChanged",
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link daoTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x1e4b432b90903ea6048a30c39d634b48d81ea538)
 */
export const useWatchDaoTokenTransferEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: daoTokenAbi,
  address: daoTokenAddress,
  eventName: "Transfer",
});
