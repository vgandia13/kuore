"use client";

import {
  useContext,
  createContext,
  useCallback,
  useSyncExternalStore,
} from "react";

type AppContextType = {
  userLogged: boolean;
  setUserLogged: (u: boolean) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

// 1. Definimos cómo React debe escuchar los cambios en el estado externo
const subscribe = (listener: () => void) => {
  // Usamos un evento personalizado para poder notificar cambios desde la misma pestaña
  window.addEventListener("auth-change", listener);
  return () => window.removeEventListener("auth-change", listener);
};

// 2. Definimos cómo React lee el valor en el cliente
const getSnapshot = () => {
  return localStorage.getItem("userLogged") === "true";
};

// 3. Definimos qué devuelve el servidor durante el SSR (evita la deshidratación)
const getServerSnapshot = () => {
  return false;
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // useSyncExternalStore gestiona automáticamente la hidratación y el estado
  // sin causar renderizados en cascada (cascading renders).
  const userLogged = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const setUserLogged = useCallback((status: boolean) => {
    if (status) {
      localStorage.setItem("userLogged", "true");
    } else {
      localStorage.removeItem("userLogged");
    }
    // Despachamos el evento para que useSyncExternalStore detecte el cambio instantáneamente
    window.dispatchEvent(new Event("auth-change"));
  }, []);

  return (
    <AppContext.Provider value={{ userLogged, setUserLogged }}>
      {children}
    </AppContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useData debe usarse dentro de un AppProvider");
  return context;
};
