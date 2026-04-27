'use client';
import { redirect } from "next/navigation";
import { useData } from "./contexts/AppContext";

export default function Home() {
    const { userLogged } = useData();
    if(!userLogged) redirect('/login');
}
