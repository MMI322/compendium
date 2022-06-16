import React from "react";
import Plot from "react-plotly.js";

/**
 * Create array num length with random values from 0 to mul
 */
function randArr(num: number, mul: number) {
  const arr = [];
  const index = [];
  for (let i = 0; i < num; i++) {
    arr.push(Math.random() * mul);
    index.push(i);
  }
  return arr;
}

/**
 * Main application component
 */

const z1 = [
    [8.83,8.89,8.81,8.87,8.9,8.87],
    [8.89,8.94,8.85,8.94,8.96,8.92],
    [8.84,8.9,8.82,8.92,8.93,8.91],
    [8.79,8.85,8.79,8.9,8.94,8.92],
    [8.79,8.88,8.81,8.9,8.95,8.92],
    [8.8,8.82,8.78,8.91,8.94,8.92],
    [8.75,8.78,8.77,8.91,8.95,8.92],
    [8.8,8.8,8.77,8.91,8.95,8.94],
    [8.74,8.81,8.76,8.93,8.98,8.99],
    [8.89,8.99,8.92,9.1,9.13,9.11],
    [8.97,8.97,8.91,9.09,9.11,9.11],
    [9.04,9.08,9.05,9.25,9.28,9.27],
    [9,9.01,9,9.2,9.23,9.2],
    [8.99,8.99,8.98,9.18,9.2,9.19],
    [8.93,8.97,8.97,9.18,9.2,9.18]
];
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
          // x: [0, 50, 100, 28.5, 0],
          // y: [0, 100, 0, 0, 0],
          // z: [960, 1083, 1083, 767, 960],
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
        plot_bgcolor: "#black",
        paper_bgcolor: "#black",
        height: 750,
        width: 720,
        scene1: {
          // camera: {
          //   center: { x: 0, y: 0, z: 0 },
          //   eye: { x: 2, y: 2, z: 0.1 },
          //   up: { x: 0, y: 0, z: 1 },
          // },
        },
        autosize: false
      }}
    />
  );
}

export default Test;
