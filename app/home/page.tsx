"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useData } from "../contexts/AppContext";
import { Chart, Title, Legend } from "@highcharts/react";
import { ColumnSeries } from "@highcharts/react/series/Column";
import { AreaSeries } from "@highcharts/react/series/Area";
import { useTheme } from "next-themes";

const HomePage = () => {
  // Asumiendo que useData expone también un estado de carga
  const { userLogged } = useData();
  if (!userLogged) return null;
  const { theme } = useTheme();

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
      <Chart
        spacing={[20, 20, 25, 20]}
        options={{
          tooltip: {
            backgroundColor: theme === "dark" ? "#000000" : "#ffffff",
            style: {
              color: theme === "dark" ? "#ffffff" : "#000000",
            },
          },
          chart: {
            type: "area",
            backgroundColor: theme === "dark" ? "#000000" : "#ffffff",
            style: {
              fontFamily: "inherit",
              color: theme === "dark" ? "#ffffff" : "#000000", // afecta bastantes elementos
            },
          },
          xAxis: {
            labels: {
              style: { color: theme === "dark" ? "#ffffff" : "#000000" },
            },
            lineColor: theme === "dark" ? "#555" : "#ccd6eb",
            tickColor: theme === "dark" ? "#555" : "#ccd6eb",
          },
          yAxis: {
            labels: {
              style: { color: theme === "dark" ? "#ffffff" : "#000000" },
            },
            title: {
              style: { color: theme === "dark" ? "#ffffff" : "#000000" },
            },
            gridLineColor: theme === "dark" ? "#333" : "#e6e6e6",
          },
          legend: {
            itemStyle: { color: theme === "dark" ? "#ffffff" : "#000000" },
          },
          plotOptions: {
            area: {
              fillOpacity: 0.3,
              fillColor: {
                linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1,
                },
                stops: [
                  [0, "rgba(0, 255, 0, 0.6)"],
                  [1, "rgba(99, 255, 241, 0)"],
                ],
              } ,
              marker: {
                enabled: false,
                symbol: "circle",
                radius: 2,
                states: {
                  hover: {
                    enabled: true,
                  },
                },
              },
            },
          },
        }}
        containerProps={{
          className: "chart-element",
          style: { width: "100%", height: "100%" },
        }}
      >
        <AreaSeries data={[3, 4, 1, 5, 2]} />
      </Chart>
    </div>
  );
};

export default HomePage;
