"use client";
import { useDeployAgent } from "@/lib/use-deploy-agent";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

export function AgentFactoryForm() {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [agentName, setAgentName] = useState("");
  const [agentDescription, setAgentDescription] = useState("");
  const [metadataUri, setMetadataUri] = useState("");
  const [sourceCodeUri, setSourceCodeUri] = useState("");
  const { data, loading, error, deployAgent } = useDeployAgent();

  return (
    <div className="flex flex-col max-w-2xl w-full bg-white dark:bg-black p-4 rounded-lg shadow-2xl space-y-2">
      <div className="flex flex-col ">
        <label htmlFor="tokenName">Token Name</label>
        <Input id="tokenName" type="text" value={tokenName} onChange={(e) => setTokenName(e.target.value)} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="tokenSymbol">Token Symbol</label>
        <Input id="tokenSymbol" type="text" value={tokenSymbol} onChange={(e) => setTokenSymbol(e.target.value)} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="agentName">Agent Name</label>
        <Input id="agentName" type="text" value={agentName} onChange={(e) => setAgentName(e.target.value)} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="agentDescription">Agent Description</label>
        <Input
          id="agentDescription"
          type="text"
          value={agentDescription}
          onChange={(e) => setAgentDescription(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="metadataUri">Metadata URI</label>
        <Input id="metadataUri" type="text" value={metadataUri} onChange={(e) => setMetadataUri(e.target.value)} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="sourceCodeUri">Source Code URI</label>
        <Input
          id="sourceCodeUri"
          type="text"
          value={sourceCodeUri}
          onChange={(e) => setSourceCodeUri(e.target.value)}
        />
      </div>
      <Button
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
      </Button>
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
