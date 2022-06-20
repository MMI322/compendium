import React from "react";
import Plot from "react-plotly.js";

function Test() {
  return (
    <Plot
      // onClick={() => console.log("click")}
      data={[
        {
          //   opacity: 0.8,
          //   color: "#FFB703",
          x: [
            0, 0, 3, 6.1, 10, 11.3, 12, 20, 14, 9, 6, 4, 2, 0, 0, 20, 20, 20,
            10, 10, 10, 0,
          ],
          y: [
            0.3, 0, 5.3, 10.8, 17.6, 15.2, 14, 0, 0, 0, 0, 0, 0, 0, 0.3, 0.3, 0,
            0.3, 17.6, 17.6, 17.6, 0.3,
          ],
          z: [
            0, 13, 15.2, 16.7, 18, 18.1, 17.8, 19, 15, 10, 4, 8, 11, 13, 0, 0,
            19, 0, 0, 18, 0, 0,
          ],
          // j: [0, 100, 0, 0, 0],
          // k: [960, 1083, 1083, 767, 960],
          //   mode: "lines+markers",
          type: "scatter3d",
          // scene: "scene1",
          line: {
            width: 2,
            color: "#032041",
          },
        },
        {
          type: "scatter3d",
          mode: "markers",
          x: [9.9, 9.1, 9.4, 10.6, 7.5, 5.8, 8.1, 10.1, 12.5, 11.3, 13, 14.2, 15.8],
          y: [16.8, 13.9, 13.3, 13.3, 13.2, 10.4, 10.5, 10.5, 10.5, 6.9, 6.8, 6.9, 6.9],
          z: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
      ]}
      layout={{
        height: 750,
        width: 720,
        title: "Au-Ag-Cu",
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
