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

      <Chart
        title="Grafica de area con varias lineas"
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
            lineColor: theme === "dark" ? "#555" : "#ccd6eb",
            tickColor: theme === "dark" ? "#555" : "#ccd6eb",
          },
          tooltip: {
            backgroundColor: theme === "dark" ? "#000000" : "#ffffff",
            style: {
              color: theme === "dark" ? "#ffffff" : "#000000",
            },
          },
          plotOptions: {
            area: {
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
              fillOpacity: 0.3,
            },
          },
          series: [
            {
              name: "Linea 1",
              color: "#ff00ff", // Color de la línea (Magenta)
              fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, "rgba(255, 0, 255, 0.6)"], // Color del área arriba
                  [1, "rgba(255, 0, 255, 0)"], // Transparente abajo
                ],
              },
              data: [
                null,
                null,
                null,
                null,
                null,
                2,
                9,
                13,
                50,
                170,
                299,
                438,
                841,
                1169,
                1703,
                2422,
                3692,
                5543,
                7345,
                12298,
                18638,
                22229,
                25540,
                28133,
                29463,
                31139,
                31175,
                31255,
                29561,
                27552,
                26008,
                25830,
                26516,
                27835,
                28537,
                27519,
                25914,
                25542,
                24418,
                24138,
                24104,
                23208,
                22886,
                23305,
                23459,
                23368,
                23317,
                23575,
                23205,
                22217,
                21392,
                19008,
                13708,
                11511,
                10979,
                10904,
                11011,
                10903,
                10732,
                10685,
                10577,
                10526,
                10457,
                10027,
                8570,
                8360,
                7853,
                5709,
                5273,
                5113,
                5066,
                4897,
                4881,
                4804,
                4717,
                4571,
                4018,
                3822,
                3785,
                3805,
                3750,
                3708,
                3708,
                3708,
                3708,
              ],
            },
            {
              name: "Linea 2",
              color: "#00ffff",
              fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, "rgba(200, 220, 200, 0.8)"],
                  [1, "rgba(0, 255, 255, 0)"],
                ],
              },
              data: [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                1,
                5,
                25,
                50,
                120,
                150,
                200,
                426,
                660,
                863,
                1048,
                1627,
                2492,
                3346,
                4259,
                5242,
                6144,
                7091,
                8400,
                9490,
                10671,
                11736,
                13279,
                14600,
                15878,
                17286,
                19235,
                22165,
                24281,
                26169,
                28258,
                30665,
                32146,
                33486,
                35130,
                36825,
                38582,
                39159,
                38107,
                36538,
                35078,
                32980,
                29154,
                26734,
                24403,
                21339,
                18179,
                15942,
                15442,
                14368,
                13188,
                12188,
                11152,
                10114,
                9076,
                8038,
                7000,
                6643,
                6286,
                5929,
                5527,
                5215,
                4858,
                4750,
                4650,
                4600,
                4500,
                4490,
                4300,
                4350,
                4330,
                4310,
                4495,
                4477,
                4489,
                4380,
              ],
            },
            {
              name: "Linea 3",
              color: "#00ff00", // Color de la línea (Verde)
              fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, "rgba(0, 255, 0, 0.6)"],
                  [1, "rgba(0, 255, 0, 0)"],
                ],
              },
              data: [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                3,
                14,
                42,
                115,
                256,
                512,
                980,
                1650,
                2600,
                3950,
                5800,
                8100,
                10900,
                14200,
                17800,
                21500,
                25200,
                28500,
                31400,
                33800,
                35500,
                36600,
                37100,
                36800,
                35900,
                34500,
                32800,
                31000,
                29100,
                27300,
                25700,
                24200,
                23000,
                22000,
                21200,
                20600,
                20100,
                19600,
                19000,
                18400,
                17700,
                16900,
                16000,
                15100,
                14200,
                13300,
                12400,
                11600,
                10800,
                10100,
                9400,
                8800,
                8200,
                7700,
                7200,
                6800,
                6400,
                6000,
                5700,
                5400,
                5100,
                4900,
                4700,
                4550,
                4420,
                4310,
                4220,
                4150,
                4100,
                4060,
                4030,
                4010,
                4000,
                3990,
                3990,
                3980,
                3980,
                3980,
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
