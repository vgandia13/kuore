'use client';

import { useData } from "../contexts/AppContext";
import Navbar from "./Navbar";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { userLogged } = useData();
  
  return (
    <>
      {userLogged && <Navbar />}
      <main className="w-full">{children}</main>
    </>
  );
}