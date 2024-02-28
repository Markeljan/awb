"use client";

import React, { useState, useEffect } from "react";
import { BaseSepolia } from "@particle-network/chains";
import { Account, SmartAccount } from "@particle-network/aa";
import { useEthereum, useConnect, useAuthCore } from "@particle-network/auth-core-modal";
import { PARTICLE_CONFIG } from "@/particle/config";
import { SocialAuthType } from "@particle-network/auth-core";
import { Button } from "@/components/ui/ace-button";

export const ParticleConnect = () => {
  const { userInfo } = useAuthCore();
  const { provider } = useEthereum();
  const { connect, disconnect } = useConnect();
  const [accountInfo, setAccountInfo] = useState<Account | null>(null);
  const [smartAccount, setSmartAccount] = useState<SmartAccount | null>(null);
  const [lastTxHash, setLastTxHash] = useState<string | null>(null);

  useEffect(() => {
    // initialize smart account
    if (!provider || !userInfo) return;

    const smartAccount = new SmartAccount(provider, {
      ...PARTICLE_CONFIG,
      aaOptions: {
        accountContracts: {
          // TODO: use Base payUserOpmaster
          SIMPLE: [{ chainIds: [BaseSepolia.id], version: "1.0.0" }],
        },
      },
    });
    smartAccount.setSmartAccountContract({ name: "SIMPLE", version: "1.0.0" });
    setSmartAccount(smartAccount);

    async function getSmartAccountInfo() {
      const accountInfo = await smartAccount.getAccount();
      setAccountInfo(accountInfo);
    }

    if (smartAccount) {
      getSmartAccountInfo();
    }
  }, [provider, userInfo]);

  const handleLogin = async (authType?: SocialAuthType) => {
    if (!userInfo) {
      await connect({
        ...(authType && { socialType: authType }),
        chain: BaseSepolia,
      });
    }
  };

  const executeUserOp = async () => {
    if (!smartAccount) return;

    const tx = {
      to: "0x42e9c498135431a48796B5fFe2CBC3d7A1811927",
      value: "0x1",
    };

    const feeQuotesResult = await smartAccount.getFeeQuotes(tx);
    const gaslessUserOp = feeQuotesResult.verifyingPaymasterGasless?.userOp;
    const gaslessUserOpHash = feeQuotesResult.verifyingPaymasterGasless?.userOpHash;

    if (!gaslessUserOp || !gaslessUserOpHash) return;

    const txHash = await smartAccount.sendUserOperation({ userOp: gaslessUserOp, userOpHash: gaslessUserOpHash });

    setLastTxHash(txHash);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {!userInfo ? (
        <div className="flex flex-col items-center w-full">
          <Button onClick={() => handleLogin("google")}>Sign in with Google</Button>
          <Button onClick={() => handleLogin("twitter")}>Sign in with Twitter</Button>
          <Button onClick={() => handleLogin()}>Sign in with Particle</Button>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full">
          <h2>{userInfo.name}</h2>
          <div className="flex flex-col items-center w-full">
            <Button onClick={executeUserOp}>Execute Transaction</Button>
            <Button onClick={() => disconnect()}>Logout</Button>
          </div>
        </div>
      )}
      {lastTxHash && (
        <div className="flex flex-col items-center w-full">
          <h2>Last Transaction</h2>
          <a href={`https://sepolia.basescan.org/tx/${lastTxHash}`} target="_blank" rel="noopener noreferrer">
            {lastTxHash}
          </a>
        </div>
      )}
    </div>
  );
};
