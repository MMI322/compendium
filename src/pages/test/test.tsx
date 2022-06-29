import React from "react";
import Plot from "react-plotly.js";

function Test() {
  return (
    <Plot
      // onClick={() => console.log("click")}
      data={[
        {
          //   opacity: 0.8,
          x: [
            0, 0, 3, 6.1, 10, 11.3, 12, 20, 14, 9, 6, 4, 2, 0, 0, 20, 20, 20,
            10, 10, 10, 0, 0, 20,
          ],
          y: [
            0, 0, 5.3, 10.8, 17.6, 15.2, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            17.6, 17.6, 17.6, 0, 0, 0,
          ],
          z: [
            0, 13, 15.2, 16.7, 18, 18.1, 17.8, 19, 15, 11, 9, 10.5, 12, 13, 0,
            0, 19, 0, 0, 18, 0, 0, 9, 9,
          ],
          type: "scatter3d",
          // scene: "scene1",
          line: {
            width: 2,
            color: "#ffffff",
          },
          marker: {
            size: 4,
          },
        },
        // {
        //   type: "scatter3d",
        //   mode: "markers",
        //   x: [
        //     9.9, 9.1, 9.4, 10.6, 7.5, 5.8, 8.1, 10.1, 12.5, 11.3, 13, 14.2,
        //     15.8,
        //   ],
        //   y: [
        //     16.8, 13.9, 13.3, 13.3, 13.2, 10.4, 10.5, 10.5, 10.5, 6.9, 6.8, 6.9,
        //     6.9,
        //   ],
        //   z: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //   marker: {
        //     size: 3,
        //   },
        // },
        {
          type: "scatter3d",
          mode: "lines+markers",
          x: [
            2, 1, 0, 0, 2, 18, 20, 20, 18, 20, 17.1, 16, 14, 12, 10, 12, 14, 16,
            17.1, 20, 17.1, 16, 14, 12, 10, 6.1, 3, 0,
          ],
          y: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 7, 10, 14, 17.6, 14, 10, 7, 5, 0,
            5, 7, 10, 14, 17.6, 10.8, 5.3, 0,
          ],
          z: [
            9, 7, 0, 13, 9, 9, 19, 5, 9, 19, 14, 13, 13, 15, 18, 14, 13, 14, 15,
            19, 15, 14, 13, 14, 18, 15.7, 14.2, 13,
          ],
          marker: {
            size: 4,
          },
        },
        {
          type: "scatter3d",
          mode: "lines+markers",
          x: [
            18, 15, 13, 10, 6.8, 5, 2, 0, 3, 5, 6.8, 6.1, 10, 10, 14, 16, 15,
            18, 20, 17.1, 18,
          ],
          y: [
            0, 5, 6.8, 8, 6, 4, 0, 0, 5.3, 4, 6, 10.8, 17.6, 8, 10, 7, 5, 0, 0,
            5, 0,
          ],
          z: [
            9, 9, 9, 9, 9, 9, 9, 13, 14.2, 9, 9, 15.7, 18, 9, 13, 13, 9, 9, 19,
            14, 9,
          ],
          marker: {
            size: 4,
          },
        },
      ]}
      layout={{
        height: 750,
        width: 720,
        title: "Au-Ag-Cu",
        plot_bgcolor: "#222222",
        paper_bgcolor: "#222222",
          font: { color: "#ffffff"}
        // scene1: {
        //   // camera: {
        //   //   center: { x: 0, y: 0, z: 0 },
        //   //   eye: { x: 2, y: 2, z: 0.1 },
        //   //   up: { x: 0, y: 0, z: 1 },
        //   // },
        // },
      }}
    />
  );
}

export default Test;
