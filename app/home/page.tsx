"use client";

import { useEffect } from "react";
import { useData } from "../contexts/AppContext";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const { userLogged } = useData();
  const router = useRouter();

  useEffect(() => {
    if (!userLogged) {
      router.push("/login");
    }
  }, [userLogged, router]);

  if (!userLogged) return null;

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
export default HomePage;
