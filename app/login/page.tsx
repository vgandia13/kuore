"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/app/components/ui/card";
import { Input } from "../components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../components/ui/input-group";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useData } from "../contexts/AppContext";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { setUserLogged } = useData();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if(!email || !password) return;
    localStorage.setItem("userLogged", "true");
    setUserLogged(true);
    router.push("/home");
  };

  return (
    <div className="flex items-center justify-center w-full min-h-[80vh] p-4">
      <Card className="flex flex-col align-middle justify-center w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle>Iniciar Sesión</CardTitle>
          <CardDescription>Inicie sesión a su cuenta</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent>
            <label htmlFor="email">Usuario:</label>
            <Input
              className="p-2 mb-2 mt-0.5"
              type="email"
              placeholder="Usuario@axarnet.dev"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Contraseña:</label>
            <InputGroup className="mb-2 mt-0.5">
              <InputGroupInput
                className="w-auto"
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputGroupAddon
                className="cursor-pointer"
                align="inline-end"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </InputGroupAddon>
            </InputGroup>
          </CardContent>
          <CardFooter>
            <Button className="w-full cursor-pointer" type="submit">
              Iniciar Sesión
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
