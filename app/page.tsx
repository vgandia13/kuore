'use client';
import { useData } from "./contexts/AppContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const { userLogged } = useData();
    const router = useRouter();
    useEffect(() => {
        if(!userLogged) router.push("/login");
    }, [userLogged, router]);
    if(!userLogged) return null;
    return <div>Contenido principal</div>
}
