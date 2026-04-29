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
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";
import { useData } from "../app/contexts/AppContext";
import { toast } from "sonner";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const { userLogged, setUserLogged } = useData();

  const handleCerrarSesion = () => {
    localStorage.removeItem("userLogged");
    setUserLogged(false);
    toast.success("Cierre de sesión exitoso");
  };

  const routes: { title: string; href: string }[] = [
    { title: "Home", href: "/home" },
    { title: "Leads", href: "/leads" },
    { title: "Accounts", href: "/accounts" },
    { title: "Contacts", href: "#" },
    { title: "Opportunities", href: "#" },
  ];

  return (
    <nav className="flex flex-col items-center w-full p-8 bg-muted border-b border-border sticky top-0 z-50">
      <div className="flex items-start justify-between mb-4 w-full">
        <div className="w-1/3">
          <HeartPulse className="text-destructive" size={40} />
        </div>

        <div className="flex w-1/" suppressHydrationWarning>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="shadow-sm mr-1">
                All <ChevronDown size={9} />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <p className="text-foreground">Here is your content</p>
            </PopoverContent>
          </Popover>
          <InputGroup className="max-w-xs shadow-md">
            <InputGroupInput
              placeholder="Search Kuore..."
              className="placeholder:text-muted-foreground"
              onChange={(e) => setSearch(e.target.value)}
            />
            <InputGroupAddon>
              <Search size={18} />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              {search ? "0 results" : ""}
            </InputGroupAddon>
          </InputGroup>
          <div className="w-8" />
        </div>

        <div className="flex items-center border rounded-md bg-background/40 overflow-hidden shadow-md p-1 gap-2">
          <ThemeToggle />
        </div>

        <div className="w-1/6 flex items-center gap-2">
          {userLogged && (
            <Button onClick={handleCerrarSesion}>Cerrar Sesión</Button>
          )}
          <Button variant="outline" size="icon" className="shadow-sm">
            <BadgePlus size={18} />
          </Button>
          <Button variant="outline" size="icon" className="shadow-sm">
            <CircleQuestionMark size={18} />
          </Button>
          <Button variant="outline" size="icon" className="shadow-sm">
            <Cog size={18} />
          </Button>
          <Button variant="outline" size="icon" className="shadow-sm">
            <Bell size={18} />
          </Button>
          <Button variant="outline" size="icon" className="shadow-sm">
            <CircleUser size={18} />
          </Button>
        </div>
      </div>

      <div className="flex justify-start items-center w-full gap-4">
        <Grip className="text-foreground cursor-pointer" size={20} />
        <NavigationMenu>
          <NavigationMenuList>
            {routes.map((route) => (
              <NavigationMenuItem key={route.title}>
                <Link href={route.href} passHref>
                  <NavigationMenuLink
                    asChild
                    className={`${navigationMenuTriggerStyle()} `}
                  >
                    <Button variant={'ghost'}>
                      <span className="flex items-center cursor-pointer">
                        {route.title}
                        <ChevronDown size={16} className="ml-1" />
                      </span>
                    </Button>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;
