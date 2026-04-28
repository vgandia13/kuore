'use client';

import { useEffect } from "react";
import { useData } from "../contexts/AppContext";
import Navbar from "./Navbar";
import { usePathname, useRouter } from "next/navigation";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { userLogged } = useData();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!userLogged && pathname !== "/login") {
      router.push("/login");
    }
    if (userLogged && pathname === "/login") {
      router.push("/home");
    }
  }, [userLogged, pathname, router]);

  if (!userLogged && pathname !== "/login") {
    return null;
  }

  return (
    <>
      {userLogged && <Navbar />}
      <main className="w-full h-full bg-background text-foreground">{children}</main>
    </>
  );
}
