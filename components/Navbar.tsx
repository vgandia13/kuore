"use client";

import {
  HeartPulse,
  Search,
  Grip,
  ChevronDown,
  BadgePlus,
  CircleQuestionMark,
  Cog,
  Bell,
  CircleUser,
} from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../components/ui/input-group";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../components/ui/popover";
import { Button } from "../components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const routes: { title: string; href: string }[] = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "Leads",
      href: "#",
    },
    {
      title: "Accounts",
      href: "#",
    },
    {
      title: "Contacts",
      href: "#",
    },
    {
      title: "Opportunities",
      href: "#",
    },
  ];

  return (
    <nav className="flex flex-col items-center w-full p-8 bg-gray-200 sticky top-0 z-50">
      <div className="flex items-start justify-between mb-4 w-full">
        <HeartPulse className="text-red-900" size={32} />
        <div className="flex" suppressHydrationWarning>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="text-black bg-white border-gray-800/40 shadow-sm">
                All <ChevronDown size={9} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="border-gray-800/40">
              <p className="text-black">Here is your content</p>
            </PopoverContent>
          </Popover>
          <InputGroup className="max-w-xs bg-gray-50 text-black shadow-md">
            <InputGroupInput
              placeholder="Search Kuore..."
              className="placeholder:text-black/50"
              onChange={(e) => setSearch(e.target.value)}
            />
            <InputGroupAddon>
              <Search size={18} />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">{search ? "0 results" : ""}</InputGroupAddon>
          </InputGroup>

          <div className="w-8" />
        </div>

        <div>
          <Button className="text-black bg-white shadow-sm">
            <BadgePlus size={18} />
          </Button>
          <Button className="text-black bg-white shadow-sm">
            <CircleQuestionMark size={18} />
          </Button>
          <Button className="text-black bg-white shadow-sm">
            <Cog size={18} />
          </Button>
          <Button className="text-black bg-white shadow-sm">
            <Bell size={18} />{" "}
          </Button>
          <Button className="text-black bg-white shadow-sm">
            <CircleUser size={18} />
          </Button>
        </div>
      </div>

      <div className="flex justify-start items-center w-full gap-4">
        <Grip className="text-black cursor-pointer" size={20} />
        <NavigationMenu>
          <NavigationMenuList>
            {routes.map((route) => (
              <NavigationMenuItem key={route.title}>
                <NavigationMenuLink
                  href={route.href}
                  className={`${navigationMenuTriggerStyle()} bg-transparent text-black hover:bg-black/10`}
                >
                  {route.title}
                  <ChevronDown size={16} className="ml-1" />
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;
