"use client"
import { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";




interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#pricing",
    label: "Pricing",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <div className="flex justify-between">
                    <div className="pt-4 pl-4 pb-4">
                        <img src="/awblogo.png" alt="Logo" className="h-6 w-auto" />
                    </div>
                    {/* Navigation links or other elements go here */}
                </div>
                {/* <img src="/awblogo.png" alt="Logo" className="h-6 w-auto" /> */}
                </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>
    </header>
  );
};
