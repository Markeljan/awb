"use client";

import React, { useState, useEffect } from "react";
import { BaseSepolia } from "@particle-network/chains";
import { SmartAccount } from "@particle-network/aa";
import { useEthereum, useConnect, useAuthCore } from "@particle-network/auth-core-modal";
import { PARTICLE_CONFIG } from "@/particle/config";
import { SocialAuthType } from "@particle-network/auth-core";
import { Button } from "@/components/ui/ace-button";
import { toast } from "sonner";
import { useGlobalState } from "../global-state-provider";

export const ParticleConnect = () => {
  const {
    state: { smartAccount, smartAccountInfo },
    dispatch,
  } = useGlobalState();

  const { userInfo } = useAuthCore();
  const { provider } = useEthereum();
  const { connect, disconnect, connectionStatus, connected } = useConnect();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

    async function getSmartAccountInfo() {
      const accountInfo = await smartAccount.getAccount();
      dispatch({ type: "SET_SMART_ACCOUNT", payload: smartAccount });
      dispatch({ type: "SET_SMART_ACCOUNT_INFO", payload: accountInfo });
    }

    if (smartAccount) {
      getSmartAccountInfo();
    }
  }, [provider, userInfo, dispatch]);

  const handleLogin = async (authType?: SocialAuthType) => {
    if (connected) {
      return;
    }
    try {
      await connect({
        ...(authType && { socialType: authType }),
        chain: BaseSepolia,
      });
    } catch (error) {
      toast(`Failed to connect with ${authType || "Particle"}`, {
        description: `Try again or use another method`,
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

    if (!txHash) return;

    toast("Transaction sent", {
      description: "Check the status on the blockchain",
      action: {
        label: "View on Explorer",
        onClick: () => {
          window.open(`https://sepolia.basescan.org/tx/${txHash}`, "_blank");
        },
      },
    });
  };

  if (!mounted || connectionStatus === "loading") return null;

  return (
    <div className="flex flex-col items-center justify-center">
      {!userInfo ? (
        <div className="flex flex-col items-center w-full">
          <Button className="mb-2" onClick={() => handleLogin("google")}>
            Sign in with Google
          </Button>
          <Button onClick={() => handleLogin("twitter")}>Sign in with Twitter</Button>
          <Button onClick={() => handleLogin()}>More options</Button>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full">
          <h2>{userInfo?.name}</h2>
          <div className="flex flex-col items-center w-full">
            <Button onClick={executeUserOp}>Execute Transaction</Button>
            <Button onClick={() => disconnect()}>Logout</Button>
          </div>
        </div>
      )}
    </div>
  );
};
