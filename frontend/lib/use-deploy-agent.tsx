"use client";

import { useState } from "react";
import { toast } from "sonner";
import { baseSepolia } from "viem/chains";

export type DAOTokenArgs = [tokenName: string, symbol: string, mintAddress: string, totalSupply: string];

export type DAOGovernorArgs = [
  name: string,
  token: string,
  votingDelay: string,
  votingPeriod: string,
  proposalThreshold: string,
  quorumVotes: string,
];

export type deployContractProps = {
  contractName: string;
  constructorArgs: DAOTokenArgs | DAOGovernorArgs;
  sourceCode: string;
  chainId?: number;
};

export function useDeployContract() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  async function deploy({ contractName, constructorArgs, sourceCode, chainId = baseSepolia.id }: deployContractProps) {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/deploy-contract", {
        method: "POST",
        headers: {},
        body: JSON.stringify({
          contractName,
          chainId,
          sourceCode,
          constructorArgs,
        }),
      });
      const data = await response.json();
      setData(data);
      setLoading(false);
      toast("Contract deployed!", {
        description: `${contractName} deployed successfully to base.`,
        action: {
          label: (
            <a href={data.explorerUrl} target="_blank">
              View on Explorer
            </a>
          ),
          onClick: () => {},
        },
      });

      return data;
    } catch (error) {
      setLoading(false);
      setError(error);
      console.error(error);
    }
  }
  return { deploy, data, loading, error };
}
