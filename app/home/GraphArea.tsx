import { Chart, Title, Legend } from "@highcharts/react";
import { AreaSeries } from "@highcharts/react/series/Area";
import { useTheme } from "next-themes";

{
  /*TODO: Graficos de area, stacked, nodos y area con varias lineas. */
}
const GraphArea = () => {
  const { theme } = useTheme();

  return (
    <Chart
      title="Grafica de area"
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
            },
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
  );
};

export default GraphArea;
