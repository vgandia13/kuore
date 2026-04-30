"use client";

import {
  HeartPulse,
  Search,
  Grip,
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
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";
import { useData } from "../app/contexts/AppContext";
import { toast } from "sonner";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { userLogged, setUserLogged } = useData();

  const handleLogout = () => {
    localStorage.removeItem("userLogged");
    setUserLogged(false);
    toast.success("Cierre de sesión exitoso");
  };

  const routes: { title: string; href: string }[] = [
    { title: "Home", href: "/home" },
    { title: "Leads", href: "/leads" },
    { title: "Accounts", href: "/accounts" },
    { title: "Contacts", href: "/contacts" },
    { title: "Opportunities", href: "#" },
  ];

  return (
    <nav className="flex flex-col w-full bg-muted border-b border-border sticky top-0 z-50 overflow-hidden">
      <div className="hidden md:flex items-center justify-between w-full px-4 py-3 gap-4">
        {/* Navbar for larger screens */}
        <div className="flex items-center gap-6">
          <HeartPulse className="text-destructive" size={40} />
          <div className="flex items-center gap-1">
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
                        <Button variant={"ghost"}>
                          <span className="flex items-center cursor-pointer">
                            {route.title}
                          </span>
                        </Button>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="flex items-center gap-4 grow justify-end">
          <div className="grow flex justify-center px-4">
            <InputGroup className="max-w-xs shadow-md">
              <InputGroupInput
                placeholder="Search Kuore..."
                className="placeholder:text-muted-foreground"
              />
              <InputGroupAddon>
                <Search size={18} />
              </InputGroupAddon>
            </InputGroup>
          </div>
          <ThemeToggle />
          <div className="flex items-center gap-2">
            {userLogged && (
              <Button
                onClick={handleLogout}
                variant="outline"
                className="bg-black text-white dark:bg-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80"
              >
                Cerrar Sesión
              </Button>
            )}
            <Button variant="outline" size="icon">
              <BadgePlus size={18} />
            </Button>
            <Button variant="outline" size="icon">
              <CircleQuestionMark size={18} />
            </Button>
            <Button variant="outline" size="icon">
              <Cog size={18} />
            </Button>
            <Button variant="outline" size="icon">
              <Bell size={18} />
            </Button>
            <Button variant="outline" size="icon">
              <CircleUser size={18} />
            </Button>
          </div>
        </div>
      </div>

      {/* Responsive Navbar for mobile */}
      <div className="md:hidden flex items-center justify-between w-full px-3 py-2 gap-2">
        <HeartPulse className="text-destructive" size={32} />
        <div className="flex items-center gap-1 shrink-0">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <Grip size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <CircleUser size={20} />
          </Button>
        </div>
      </div>

      {openMenu && (
        <div className="md:hidden flex flex-col w-full px-4 pb-3 gap-2 border-t border-border">
          {routes.map((route) => (
            <Link key={route.title} href={route.href} passHref>
              <Button variant="ghost" className="w-full justify-start">
                {route.title}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
