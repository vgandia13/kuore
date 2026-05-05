'use client';

import { useEffect, useState } from "react";
import { useData } from "../app/contexts/AppContext";
import Navbar from "@/components/Navbar";
import { usePathname, useRouter } from "next/navigation";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { userLogged } = useData();
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if(pathname === "/" && userLogged) router.push("/home");
    if (!userLogged && pathname !== "/login") {
      router.push("/login");
    }
    if (userLogged && pathname === "/login") {
      router.push("/home");
    }
  }, [userLogged, pathname, router, mounted]);

  if (!mounted) return null;

  if (!userLogged && pathname !== "/login") {
    return null;
  }

  return (
    <>
      {userLogged && <Navbar />}
      <main className="w-full h-full bg-background text-foreground overflow-x-hidden">{children}</main>
    </>
  );
}
