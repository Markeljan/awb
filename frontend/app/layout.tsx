import type { Metadata } from "next";
import { Chivo_Mono as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ParticleProvider } from "@/particle/provider";
import { UIProvider } from "@/app/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { GlobalStateProvider } from "@/particle/global-state-provider";
import { Analytics } from "@vercel/analytics/react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Agents With Benefits",
  description: "Source ideas, build agents, govern with DAOs.",
  openGraph: {
    title: "Agents With Benefits",
    description: "Source ideas, build agents, govern with DAOs.",
    type: "website",
    url: "https://agentswithbenefits.xyz",
    images: [
      {
        url: "https://agentswithbenefits.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agents With Benefits",
      },
    ],
  },
  metadataBase: new URL("https://agentswithbenefits.xyz"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Analytics />
        <GlobalStateProvider>
          <UIProvider>
            <ParticleProvider>{children}</ParticleProvider>
            <Toaster />
          </UIProvider>
        </GlobalStateProvider>
      </body>
    </html>
  );
}
