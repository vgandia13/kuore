"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useData } from "../contexts/AppContext";

const HomePage = () => {
  // Asumiendo que useData expone también un estado de carga
  const { userLogged } = useData();
  if (!userLogged) return null;
  // 1. Manejo del es
  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-10">
      {/* Cabecera / Hero */}
      <div className="space-y-4">
        <Skeleton className="h-10 w-1/3 md:w-1/4" />
        <Skeleton className="h-4 w-2/3 md:w-1/2" />
      </div>

      {/* Cuadrícula de contenido (ej. tarjetas, artículos o productos) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="p-4 border rounded-xl space-y-4">
            {/* Imagen o contenedor principal de la tarjeta */}
            <Skeleton className="h-40 w-full rounded-lg" />
            {/* Título de la tarjeta */}
            <Skeleton className="h-6 w-3/4" />
            {/* Subtítulo o descripción */}
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
