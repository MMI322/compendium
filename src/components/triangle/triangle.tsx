import React from "react";
import Plot from "react-plotly.js";

export const Triangle = () => {
  const rawData = [
    { journalist: 75, developer: 25, designer: 0, label: "point 1" },
    { journalist: 70, developer: 10, designer: 20, label: "point 2" },
    { journalist: 75, developer: 20, designer: 5, label: "point 3" },
    { journalist: 5, developer: 60, designer: 35, label: "point 4" },
    { journalist: 10, developer: 80, designer: 10, label: "point 5" },
    { journalist: 10, developer: 90, designer: 0, label: "point 6" },
    { journalist: 20, developer: 70, designer: 10, label: "point 7" },
    { journalist: 10, developer: 20, designer: 70, label: "point 8" },
    { journalist: 15, developer: 5, designer: 80, label: "point 9" },
    { journalist: 10, developer: 10, designer: 80, label: "point 10" },
    { journalist: 20, developer: 10, designer: 70, label: "point 11" },
  ];

  return (
    <Plot
      data={[
        {
          type: "scatterternary",
          mode: "markers",
          //@ts-ignore
          a: rawData.map(function (d) {
            return d.journalist;
          }),
          b: rawData.map(function (d) {
            return d.developer;
          }),
          c: rawData.map(function (d) {
            return d.designer;
          }),
          text: rawData.map(function (d) {
            return d.label;
          }),
          marker: {
            symbol: 100,
            color: "#CA874F",
            size: 14,
            line: { width: 2 },
          },
        },
      ]}
      layout={{
        height: 387,
        width: 540,
      }}
    />
  );
};
