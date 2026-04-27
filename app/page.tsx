import { redirect } from "next/navigation";

export default function Home() {
    redirect("/pages/login");
    return (
      <div className="bg-slate-500">
              
      </div>
    );
}
