"use client";
import { useDeployAgent } from "@/lib/use-deploy-agent";
import { useState } from "react";

export function AgentFactoryForm() {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [agentName, setAgentName] = useState("");
  const [agentDescription, setAgentDescription] = useState("");
  const [metadataUri, setMetadataUri] = useState("");
  const [sourceCodeUri, setSourceCodeUri] = useState("");
  const { data, loading, error, deployAgent } = useDeployAgent();

  return (
    <div className="flex flex-col max-w-2xl w-full">
      <div className="flex flex-col">
        <label htmlFor="tokenName">Token Name</label>
        <input id="tokenName" type="text" value={tokenName} onChange={(e) => setTokenName(e.target.value)} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="tokenSymbol">Token Symbol</label>
        <input id="tokenSymbol" type="text" value={tokenSymbol} onChange={(e) => setTokenSymbol(e.target.value)} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="agentName">Agent Name</label>
        <input id="agentName" type="text" value={agentName} onChange={(e) => setAgentName(e.target.value)} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="agentDescription">Agent Description</label>
        <input
          id="agentDescription"
          type="text"
          value={agentDescription}
          onChange={(e) => setAgentDescription(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="metadataUri">Metadata URI</label>
        <input id="metadataUri" type="text" value={metadataUri} onChange={(e) => setMetadataUri(e.target.value)} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="sourceCodeUri">Source Code URI</label>
        <input
          id="sourceCodeUri"
          type="text"
          value={sourceCodeUri}
          onChange={(e) => setSourceCodeUri(e.target.value)}
        />
      </div>
      <button
        disabled={loading}
        onClick={async () =>
          await deployAgent({
            tokenName,
            tokenSymbol,
            agentName,
            agentDescription,
            metadataUri,
            sourceCodeUri,
          })
        }
      >
        Deploy Agent
      </button>
      {loading ? (
        <div>Loading...</div>
      ) : data ? (
        <a href={data?.explorerUrl} target="_blank" rel="noreferrer">
          View on Explorer
        </a>
      ) : error ? (
        <div>{JSON.stringify(error)}</div>
      ) : null}
    </div>
  );
}
