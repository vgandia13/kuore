"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  // resolvedTheme devuelve "light" o "dark" incluso cuando theme === "system"
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  // Mismo marcado antes y después de montar: sin saltos de layout.
  return (
    <div className="flex items-center gap-2">
      <Sun size={20} />
      <Switch
        className="border border-border"
        checked={isDark}
        disabled={!mounted}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Cambiar tema claro/oscuro"
      />
      <Moon size={20} />
    </div>
  );
}
