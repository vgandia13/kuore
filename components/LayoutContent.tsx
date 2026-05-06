'use client';

import { useEffect } from "react";
import { useData } from "../app/contexts/AppContext";
import Navbar from "@/components/Navbar";
import { usePathname, useRouter } from "next/navigation";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { userLogged } = useData();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (userLogged === undefined) return;
    
    // Protección de rutas
    if (pathname === "/" && userLogged) {
      router.replace("/home");
    } else if (!userLogged && pathname !== "/login") {
      router.replace("/login");
    } else if (userLogged && pathname === "/login") {
      router.replace("/home");
    }
  }, [userLogged, pathname, router]);

  // Si no está definido (cargando estado), devolvemos null
  if (userLogged === undefined) return null; 

  return (
    <>
      {userLogged && <Navbar />}
      <main className="w-full h-full bg-background text-foreground overflow-x-hidden">{children}</main>
    </>
  );
}
