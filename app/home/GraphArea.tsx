import { Chart } from "@highcharts/react";
import { AreaSeries } from "@highcharts/react/series/Area";
import { ColumnSeries } from "@highcharts/react/series/Column";
import { PieSeries } from "@highcharts/react/series/Pie";

import { useTheme } from "next-themes";

{
  /*TODO: Graficos de area, stacked, donut, nodos y area con varias lineas. */
}
const GraphArea = () => {
  const { theme } = useTheme();

  return (
    <>
      {/* Grafico de area */}

      <Chart
        title="Grafica de area"
        spacing={[20, 20, 25, 20]}
        options={{
          /*Opciones de estilos para el tooltip */
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
              /* Opciones para que el color del area del grafico sea un gradiente */ 
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
              },
              marker: {
                /* Opciones para que al hacer hover en el grafico se muestre el punto al que apuntamos. */ 
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
        <AreaSeries data={[3, 4, 3, 5, 2, 4, 2, 3, 2, 5, 1.75, 3, 4, 3]} />
      </Chart>

      {/* Grafico de columnas */}

      <Chart
        title="Grafico de columnas stacked"
        options={{
          chart: {
            type: "column",
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
          },
          plotOptions: {
            /* Esta opcion hace que si hay varias columnas esten una encima de la otra en lugar de al lado */ 
            column: {
              stacking: "normal",
            },
          },
          series: [
            {
              name: "John",
              data: [3, 4, 3, 5, 2, 4, 2, 3],
            },
            {
              name: "Jane",
              data: [2, 3, 2, 4, 1, 3, 1, 2],
            },
            {
              name: "Joe",
              data: [1, 2, 1, 3, 0.5, 2, 5, 1],
            },
          ],
        }}
      >
        <ColumnSeries />
      </Chart>

      {/* Grafico de donut */}
      <Chart
        title="Grafico de donut"
        options={{
          chart: {
            type: "pie",
            backgroundColor: theme === "dark" ? "#000000" : "#ffffff",
            style: {
              fontFamily: "inherit",
              color: theme === "dark" ? "#ffffff" : "#000000", // afecta bastantes elementos
            },
          },
          legend: {
            itemStyle: { color: theme === "dark" ? "#ffffff" : "#000000" },
          },
          plotOptions: {
            pie: {},
          },
          series: [
            {
              type: "pie",
              /* Esta opcion hace que el grafico sea un donut (con espacio en el centro) */
              innerSize: "70%",
              name: "Usuarios",
              dataLabels: [
                {
                  enabled: true,
                  distance: 20,
                  format: "{point.name}",
                },
              ],
              data: [
                {
                  name: "John",
                  y: 5,
                },
                {
                  name: "Jane",
                  y: 3,
                },
              ],
            },
          ],
        }}
      >
        <PieSeries />
      </Chart>

      {/*Grafico de nodos */}
      <Chart
        title="Grafico con nodos"
        options={{
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
                  [0, "rgba(255, 100, 255, 0.6)"],
                  [1, "rgba(99, 255, 241, 0)"],
                ],
              },
              marker: {
                /* Aqui activamos los marcadores (nodos) para que se vean siempre. */ 
                enabled: true,
                symbol: "circle",
                radius: 5,
              },
            },
          },
          series: [
            {
              type: "area",
              data: [
                3, 4, 3, 4, 3, 2, 4, 2, 3, 2, 5, 1.75, 3, 4, 3, 3, 4, 3, 5, 2,
                4, 2, 3, 2, 5, 1.75, 3, 4, 3, 3, 4, 3, 5, 2, 4, 2, 3, 2, 5,
                1.75, 3, 4, 3, 3, 4, 3, 5, 2, 4, 2, 3, 2, 5, 1.75, 3, 4, 3,
              ],
            },
          ],
        }}
      >
        <AreaSeries />
      </Chart>
    </>
  );
};

export default GraphArea;
