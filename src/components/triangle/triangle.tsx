import React from "react";
import Plot from "react-plotly.js";
import { useNavigate } from "react-router-dom";
import { compendiumData } from "../../data/compendium-data";
import { setElemPageStore } from "../../stores/elemPage.store";

export const Triangle = () => {
  const rawData = [
    { au: 37.5, ag: 1.7, cu: 60.8, label: "ЗлСрМ 375-20" },
    { au: 37.5, ag: 9.5, cu: 53, label: "ЗлСрМ 375-100" },
    { au: 37.5, ag: 15.5, cu: 47, label: "ЗлСрМ 375-160" },
    { au: 37.5, ag: 24.5, cu: 38, label: "ЗлСрМ 375-250" },
    { au: 50, ag: 9.5, cu: 4.5, label: "ЗлСрМ 500-100" },
    { au: 58.5, ag: 41.5, cu: 0, label: "ЗлСр 585-415" },
    { au: 58.5, ag: 7.5, cu: 34, label: "ЗлСрМ 585-80" },
    { au: 58.5, ag: 19.5, cu: 22, label: "ЗлСрМ 585-200" },
    { au: 58.5, ag: 29.5, cu: 12, label: "ЗлСрМ 585-300" },
    { au: 75, ag: 25, cu: 0, label: "ЗлСр 750-250" },
    { au: 75, ag: 12, cu: 13, label: "ЗлСрМ 750-125" },
    { au: 75, ag: 15, cu: 10, label: "ЗлСрМ 750-150" },
    { au: 96, ag: 2, cu: 2, label: "ЗлСрМ 958-20" },
    { au: 99.9, ag: 0, cu: 0, label: "Зл 999,9" },
  ];
  const regex = new RegExp(/\d+-?,?\d+/gm);
  const navigate = useNavigate();

  return (
    <Plot
      onClick={(e) => {
        const index = e.points[0].pointIndex;
        const link = e.points[0].data.text[index].match(regex)![0];
        const page = compendiumData.find(
          (i) => i.numberName.toString() === link
        );
        setElemPageStore(page!);
        navigate(`/compendium/${link}`);
      }}
      data={[
        {
          type: "scatterternary",
          mode: "markers",
          //@ts-ignore
          a: rawData.map(function (d) {
            return d.au;
          }),
          b: rawData.map(function (d) {
            return d.ag;
          }),
          c: rawData.map(function (d) {
            return d.cu;
          }),
          text: rawData.map(function (d) {
            return d.label;
          }),
          marker: {
            // symbol: 100,
            color: "#CA874F",
            size: 10,
            // line: { width: 5 }
          },
          hoverlabel: {
            bgcolor: "#fff",
            bordercolor: "#CA874F",
            font: {
              color: "black",
              size: 9,
            },
          },
        },
      ]}
      layout={{
        height: 387,
        width: 540,
        ternary: {
          sum: 100,
          aaxis: makeAxis("Au"),
          baxis: makeAxis("Ag"),
          caxis: makeAxis("Cu"),
        },
      }}
    />
  );
};

function makeAxis(title: string) {
  return {
    title: title,
    titlefont: { size: 20 },
    tickfont: { size: 15 },
    tickcolor: "rgba(0,0,0,0)",
    ticklen: 5,
    showline: true,
    showgrid: true,
  };
}
