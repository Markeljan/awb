import Image from "next/image";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const people = [
  {
    id: 1,
    name: "cryptodadjokes",
    designation: "I think I'm funny",
    image: "/pfp.png",
  },
  {
    id: 2,
    name: "Shadowy Super Coders",
    designation: "Find Devs for you",
    image: "/pfp_ssc.png",
  },
  {
    id: 3,
    name: "Bufficorn",
    designation: "ETHDenver Guide",
    image: "/pfp_buff.png",
  },
  {
    id: 4,
    name: "Logo Castle",
    designation: "Need Logo?",
    image: "/pfp_logo.png",
  },
  {
    id: 5,
    name: "Doja Dog Dao",
    designation: "DDD makes music",
    image: "/pfp_dojadog.png",
  },
  {
    id: 6,
    name: "Waffle House",
    designation: "Waffle everyday",
    image: "/pfp_waff.png",
  },
];

export function TryAgent() {
  return (
    <section id="DaoRank" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Custom AI Agents Deployed as a DAO{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"></span>
      </h2>
      <p className="mt-4 mb-8 text-xl text-muted-foreground">
        DAO members can collaboratively govern an AI Agent and grow with the
        Agent while getting shared a revenue
      </p>
      <div className="flex justify-center">
        <div className="pt-20 gap-4">
          <div className="flex flex-row items-center justify-center w-full h-30">
            <AnimatedTooltip items={people} />
          </div>
          <div className="grid grid-cols-2 gap-4 row-span-1">
            <div>
              <Card className="space-y-2">
                <div className="grid grid-rows-4 gap-4">
                  <CardHeader>
                    <CardTitle>cryptodadajokes</CardTitle>
                  </CardHeader>
                  <div className="pl-5 pr-5 content-around">
                    <p>Features</p>
                    <Badge>Writer</Badge>
                    <Badge>Farcaster</Badge>
                    <Badge>IP Licensed</Badge>
                  </div>
                  <div className="pl-5 pr-5 content-around">
                    <p>Description</p>
                    <div>
                      Your neighborhood crypto dad who only replies in dad jokes
                    </div>
                  </div>
                  <div className="pl-5 pr-5 content-around">
                    <p>DAO stats</p>
                    <div className="grid grid-rows-3 grid-cols-2 gap-2">
                      <div className="font-bold">Members</div>
                      <div>32</div>

                      <div className="font-bold">Messages</div>
                      <div>44</div>

                      <div className="font-bold">Revenue</div>
                      <div>4ETH</div>
                    </div>
                  </div>
                  <CardContent>
                    <div className="space-y-1">
                      <Label htmlFor="name">77 holders 88 messages</Label>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Join Now</Button>
                  </CardFooter>
                  {/* <div className="space-y-2 flex flex-row justify-right"> */}
                </div>
              </Card>
            </div>
            <div>Chat Interface here</div>
          </div>
        </div>
      </div>
      <div>
        <img src="/chat.png" alt="chat ui"></img>
      </div>
    </section>
  );
}
