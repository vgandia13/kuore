"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Switch } from "../../components/ui/switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect solo se ejecuta en el cliente.
  // Esto garantiza que el componente sabe en qué entorno está.

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Si no está montado, renderizamos un placeholder o un botón deshabilitado
  // para que el HTML coincida exactamente con lo que envió el servidor.
  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled>
        <div className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <>
      <Sun size={20} />
      <Switch
        className="border border-border"
        checked={theme === "dark"}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <Moon size={20} />
    </>
  );
}
