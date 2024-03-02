import type { Metadata } from "next";
import { Chivo_Mono as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ParticleProvider } from "@/particle/provider";
import { UIProvider } from "@/app/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { GlobalStateProvider } from "@/particle/global-state-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Agents With Benefits",
  description: "Source ideas, build agents, govern with DAOs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
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
