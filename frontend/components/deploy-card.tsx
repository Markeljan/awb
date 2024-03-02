"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDeployContract } from "@/lib/use-deploy-agent";
import { tokenSourceCode, governorSourceCode } from "@/lib/contract-source-code";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Set up the zod schema for form validation. Both fields are required and must be strings
const tokenSchema = z.object({
  tokenName: z.string().min(1, { message: "Token name is required" }).max(32, { message: "Token name is too long" }),
  tokenSymbol: z.string().min(1, { message: "Symbol is required" }).max(8, { message: "Symbol is too long" }),
  daoName: z.string().min(1, { message: "DAO name is required" }).max(32, { message: "DAO name is too long" }),
});

export function TokenDeployCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(tokenSchema),
  });
  const { data, deploy, loading, error } = useDeployContract();

  const onSubmit = async (data: any) => {
    // Deploy the token contract

    console.log("Deploying token with data:", data);
  };

  return (
    <Card className="flex max-w-2-xl w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>DAO Deployer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-4">
            <div className="flex gap-2">
              <div className="flex w-3/4 flex-col space-y-1.5">
                <Label htmlFor="tokenName">Token Name</Label>
                <Input id="tokenName" placeholder="Agents With Benefits" {...register("tokenName")} />
              </div>
              <div className="flex w-1/4 flex-col space-y-1.5">
                <Label htmlFor="tokenSymbol">Symbol</Label>
                <Input id="tokenSymbol" placeholder="AWB" {...register("tokenSymbol")} />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="daoName">DAO Name</Label>
              <Input id="daoName" placeholder="AWB Governor" {...register("daoName")} />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Deploy
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
