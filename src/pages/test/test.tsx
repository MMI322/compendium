import React from "react";
import Plot from "react-plotly.js";

function randArr(num: number, mul: number) {
  const arr = [];
  const index = [];
  for (let i = 0; i < num; i++) {
    arr.push(Math.random() * mul);
    index.push(i);
  }
  return arr;
}

function Test() {
  return (
    //@ts-ignore
    <Plot
      data={[
        {
          //   opacity: 0.8,
          //   color: "#FFB703",
          x: [5, 20, 5, 5, 5, 20, 5, 5],
          y: [1.34, 10, 18.66, 1.34, 1.34, 10, 18.66, 1.34],
          z: [0, 0, 0, 0, 1000, 1000, 1000, 1000],
          // i: [0, 50, 100, 28.5, 0],
          // j: [0, 100, 0, 0, 0],
          // k: [960, 1083, 1083, 767, 960],
          //   mode: "lines+markers",
          type: "scatter3d",
          scene: "scene1",
          line: {
            width: 2,
            color: "#032041",
          },
        },
      ]}
      layout={{
        height: 750,
        width: 720,
        scene1: {
          // camera: {
          //   center: { x: 0, y: 0, z: 0 },
          //   eye: { x: 2, y: 2, z: 0.1 },
          //   up: { x: 0, y: 0, z: 1 },
          // },
        },
        autosize: false,
      }}
    />
  );
}

export default Test;
