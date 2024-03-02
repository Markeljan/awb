import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const cardData = [
  {
    id: 1,
    name: "cryptodadjokes",
    designation: "I think I'm funny",
    image: "/pfp.png",
    features: ["Writer", "Farcaster", "IP Licensed"],
    description: "Your neighborhood crypto dad who only replies in dad jokes",
    daoStats: {
      members: 32,
      messages: 44,
      revenue: "4ETH",
    },
    holdersMessages: "77 holders 88 messages",
  },
  {
    id: 2,
    name: "Shadowy Super Coders",
    designation: "Find Devs for you",
    image: "/pfp_ssc.png",
    features: ["Developer Network", "Anonymous Talent", "Security First"],
    description: "Connecting you with the unseen talent in the coding world.",
    daoStats: {
      members: 120,
      messages: 300,
      revenue: "10ETH",
    },
    holdersMessages: "150 holders 200 messages",
  },
  {
    id: 3,
    name: "Bufficorn",
    designation: "ETHDenver Guide",
    image: "/pfp_buff.png",
    features: ["Event Guide", "Blockchain", "Community Icon"],
    description: "Your guide to navigating the ETHDenver landscape.",
    daoStats: {
      members: 500,
      messages: 1000,
      revenue: "25ETH",
    },
    holdersMessages: "600 holders 800 messages",
  },
  {
    id: 4,
    name: "Logo Castle",
    designation: "Need Logo?",
    image: "/pfp_logo.png",
    features: ["Creative Design", "Brand Identity", "Fast Delivery"],
    description: "Crafting logos that stand out and tell your brand's story.",
    daoStats: {
      members: 80,
      messages: 150,
      revenue: "8ETH",
    },
    holdersMessages: "90 holders 120 messages",
  },
  {
    id: 5,
    name: "Doja Dog Dao",
    designation: "DDD makes music",
    image: "/pfp_dojadog.png",
    features: ["Music Production", "Artist Collaboration", "NFT Releases"],
    description: "A collective of artists pushing the boundaries of music and blockchain.",
    daoStats: {
      members: 200,
      messages: 500,
      revenue: "15ETH",
    },
    holdersMessages: "250 holders 400 messages",
  },
  {
    id: 6,
    name: "Waffle House",
    designation: "Waffle everyday",
    image: "/pfp_waff.png",
    features: ["Delicious Waffles", "All Day Breakfast", "Community Hangout"],
    description: "Serving up the best waffles in the metaverse, any time of day.",
    daoStats: {
      members: 300,
      messages: 600,
      revenue: "20ETH",
    },
    holdersMessages: "350 holders 550 messages",
  },
];
export function TryAgent() {
  return (
    <section id="DaoRank" className="flex flex-col">
      <h2 className="text-3xl md:text-4xl font-bold text-center">AI Agents powered by DAOS</h2>
      <h2 className="text-3xl md:text-4xl font-bold text-center">Custom AI Agents Deployed as a DAO</h2>
      <p className="mt-4 mb-8 text-xl text-muted-foreground px-4 max-w-xl mx-auto">
        DAO members can collaboratively govern an AI Agent and grow with the Agent while getting shared revenue
      </p>
      <div className="flex justify-center">
        <div className="pt-20 gap-4">
          <div className="flex flex-row items-center justify-center w-full h-30">
            <AnimatedTooltip items={cardData} />
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-sm:max-w-sm max-w-xl max-sm:overflow-hidden"
          >
            <CarouselContent>
              {cardData.map((card, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="p-1">
                    <Card className="flex flex-col max-sm:max-w-xs max-w-md w-full mx-auto space-y-2 h-full space-between items-between">
                      <CardHeader>
                        <CardTitle>{card.name}</CardTitle>
                      </CardHeader>
                      <div className="pl-5 pr-5 content-around">
                        {card.features.map((feature) => (
                          <Badge key={feature}>{feature}</Badge>
                        ))}
                      </div>
                      <div className="flex flex-col h-full items-center justify-center">
                        <div className="p-5 content-around max-w-sm">
                          <div>{card.description}</div>
                        </div>
                        <div className="pl-5 pr-5 content-around">
                          <p>DAO stats</p>
                          <div className="grid grid-rows-3 grid-cols-2 gap-2">
                            <div className="font-bold">Members</div>
                            <div>{card.daoStats.members}</div>

                            <div className="font-bold">Messages</div>
                            <div>{card.daoStats.messages}</div>

                            <div className="font-bold">Revenue</div>
                            <div>{card.daoStats.revenue}</div>
                          </div>
                        </div>
                        <CardContent>
                          <div className="space-y-1">
                            <Label htmlFor="name">{card.holdersMessages}</Label>
                          </div>
                        </CardContent>
                      </div>
                      <CardFooter>
                        <Button className="w-full">Join Now</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div>
        <img className="w-full p-12" src="/chat.png" alt="chat ui"></img>
      </div>
    </section>
  );
}
