import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export function RankTab() {
  return (
    <section
    id="DaoRank"
    className="container py-24 sm:py-32"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-center ">
      Find Your Dao {" "}
      <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
      </span>
    </h2>
    <p className="mt-4 mb-8 text-xl text-muted-foreground">

      With each AI Agent DAO's performance and attributes on chain,
      you can find your community to join with transparent, up-to-date data
    </p>
    <div className="flex justify-center">
    <Tabs defaultValue="DaoRank" className="w-[600px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="Top Revenue"> Top Revenue</TabsTrigger>
        <TabsTrigger value="Most Used"> Most Used</TabsTrigger>
        <TabsTrigger value="Recently Created"> Recently Created</TabsTrigger>
      </TabsList>
      <TabsContent value="DaoRank">
        <Card>
          <CardHeader>
            <CardTitle>📈 Top Revenue</CardTitle>
            <CardDescription>
              Top agent DAOs that are going moon
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <Card className="space-y-2">
              <div className="space-y-2 grid grid-cols-2 gap-4">
                <CardHeader>
                  <CardTitle>grootDao</CardTitle>
                  <CardDescription>groot groot? groot!</CardDescription>
                </CardHeader>
                <div className="pl-1 pr-1 content-around">
                  <Badge>Writer</Badge>
                  <Badge>Farcaster</Badge>
                  <Badge>IP Licensed</Badge>
                </div>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">77 holders 88 messages</Label>
                  </div>
                </CardContent>
                {/* <div className="space-y-2 flex flex-row justify-right"> */}
                <div className="px-2 pb-4 grid grid-cols-2 gap-4 items-center">
                  <Button className="w-full">Try</Button>
                  <Button className="w-full">Join</Button>
                </div>
              </div>
            </Card>
            <Card className="space-y-2">
              <div className="space-y-2 grid grid-cols-2 gap-4">
                <CardHeader>
                  <CardTitle>grootDao</CardTitle>
                  <CardDescription>groot groot? groot!</CardDescription>
                </CardHeader>
                <div className="pl-1 pr-1 content-around">
                  <Badge>Writer</Badge>
                  <Badge>Farcaster</Badge>
                  <Badge>IP Licensed</Badge>
                </div>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">77 holders 88 messages</Label>
                  </div>
                </CardContent>
                {/* <div className="space-y-2 flex flex-row justify-right"> */}
                <div className="px-2 pb-4 grid grid-cols-2 gap-4 items-center">
                  <Button className="w-full">Try</Button>
                  <Button className="w-full">Join</Button>
                </div>
              </div>
            </Card>
            <Card className="space-y-2">
              <div className="space-y-2 grid grid-cols-2 gap-4">
                <CardHeader>
                  <CardTitle>grootDao</CardTitle>
                  <CardDescription>groot groot? groot!</CardDescription>
                </CardHeader>
                <div className="pl-1 pr-1 content-around">
                  <Badge>Writer</Badge>
                  <Badge>Farcaster</Badge>
                  <Badge>IP Licensed</Badge>
                </div>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">77 holders 88 messages</Label>
                  </div>
                </CardContent>
                {/* <div className="space-y-2 flex flex-row justify-right"> */}
                <div className="px-2 pb-4 grid grid-cols-2 gap-4 items-center">
                  <Button className="w-full">Try</Button>
                  <Button className="w-full">Join</Button>
                </div>
              </div>
            </Card>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Most Used">
        <Card>
          <CardHeader>
            <CardTitle> 👍 Most Used</CardTitle>
            <CardDescription>Popular Agents among users!</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <Card className="space-y-2">
              <div className="space-y-2 grid grid-cols-2 gap-4">
                <CardHeader>
                  <CardTitle>grootDao</CardTitle>
                  <CardDescription>groot groot? groot!</CardDescription>
                </CardHeader>
                <div className="pl-1 pr-1 content-around">
                  <Badge>Writer</Badge>
                  <Badge>Farcaster</Badge>
                  <Badge>IP Licensed</Badge>
                </div>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">77 holders 88 messages</Label>
                  </div>
                </CardContent>
                {/* <div className="space-y-2 flex flex-row justify-right"> */}
                <div className="px-2 pb-4 grid grid-cols-2 gap-4 items-center">
                  <Button className="w-full">Try</Button>
                  <Button className="w-full">Join</Button>
                </div>
              </div>
            </Card>
            <Card className="space-y-2">
              <div className="space-y-2 grid grid-cols-2 gap-4">
                <CardHeader>
                  <CardTitle>grootDao</CardTitle>
                  <CardDescription>groot groot? groot!</CardDescription>
                </CardHeader>
                <div className="pl-1 pr-1 content-around">
                  <Badge>Writer</Badge>
                  <Badge>Farcaster</Badge>
                  <Badge>IP Licensed</Badge>
                </div>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">77 holders 88 messages</Label>
                  </div>
                </CardContent>
                {/* <div className="space-y-2 flex flex-row justify-right"> */}
                <div className="px-2 pb-4 grid grid-cols-2 gap-4 items-center">
                  <Button className="w-full">Try</Button>
                  <Button className="w-full">Join</Button>
                </div>
              </div>
            </Card>
            <Card className="space-y-2">
              <div className="space-y-2 grid grid-cols-2 gap-4">
                <CardHeader>
                  <CardTitle>grootDao</CardTitle>
                  <CardDescription>groot groot? groot!</CardDescription>
                </CardHeader>
                <div className="pl-1 pr-1 content-around">
                  <Badge>Writer</Badge>
                  <Badge>Farcaster</Badge>
                  <Badge>IP Licensed</Badge>
                </div>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">77 holders 88 messages</Label>
                  </div>
                </CardContent>
                {/* <div className="space-y-2 flex flex-row justify-right"> */}
                <div className="px-2 pb-4 grid grid-cols-2 gap-4 items-center">
                  <Button className="w-full">Try</Button>
                  <Button className="w-full">Join</Button>
                </div>
              </div>
            </Card>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Recently Created">
        <Card>
          <CardHeader>
            <CardTitle> 🆕 Recently Created</CardTitle>
            <CardDescription>
              New agent DAOs with full of potential
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Card className="space-y-2">
              <div className="space-y-2 grid grid-cols-2 gap-4">
                <CardHeader>
                  <CardTitle>grootDao</CardTitle>
                  <CardDescription>groot groot? groot!</CardDescription>
                </CardHeader>
                <div className="pl-1 pr-1 content-around">
                  <Badge>Writer</Badge>
                  <Badge>Farcaster</Badge>
                  <Badge>IP Licensed</Badge>
                </div>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">77 holders 88 messages</Label>
                  </div>
                </CardContent>
                {/* <div className="space-y-2 flex flex-row justify-right"> */}
                <div className="px-2 grid grid-cols-2 gap-4 items-center">
                  <Button className="w-full">Try</Button>
                  <Button className="w-full">Join</Button>
                </div>
              </div>
              <CardFooter></CardFooter>
            </Card>
            <Card className="space-y-2">
              <div className="space-y-2 grid grid-cols-2 gap-4">
                <CardHeader>
                  <CardTitle>grootDao</CardTitle>
                  <CardDescription>groot groot? groot!</CardDescription>
                </CardHeader>
                <div className="pl-1 pr-1 content-around">
                  <Badge>Writer</Badge>
                  <Badge>Farcaster</Badge>
                  <Badge>IP Licensed</Badge>
                </div>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">77 holders 88 messages</Label>
                  </div>
                </CardContent>
                {/* <div className="space-y-2 flex flex-row justify-right"> */}
                <div className="px-2 grid grid-cols-2 gap-4 items-center">
                  <Button className="w-full">Try</Button>
                  <Button className="w-full">Join</Button>
                </div>
              </div>
              <CardFooter></CardFooter>
            </Card>
            <Card className="space-y-2">
              <div className="space-y-2 grid grid-cols-2 gap-4">
                <CardHeader>
                  <CardTitle>grootDao</CardTitle>
                  <CardDescription>groot groot? groot!</CardDescription>
                </CardHeader>
                <div className="pl-1 pr-1 content-around">
                  <Badge>Writer</Badge>
                  <Badge>Farcaster</Badge>
                  <Badge>IP Licensed</Badge>
                </div>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">77 holders 88 messages</Label>
                  </div>
                </CardContent>
                {/* <div className="space-y-2 flex flex-row justify-right"> */}
                <div className="px-2 grid grid-cols-2 gap-4 items-center">
                  <Button className="w-full">Try</Button>
                  <Button className="w-full">Join</Button>
                </div>
              </div>
              <CardFooter></CardFooter>
            </Card>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
    </section>
  );
}
