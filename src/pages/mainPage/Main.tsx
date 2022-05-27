import { useStore } from "effector-react";
import React, { useState } from "react";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Tooltip } from "../../components/tooltip/Tooltip";
import { compendiumData, goldBrand } from "../../data/compendium-data";
import { searchStore } from "../../stores/search.store";
import "./style.css";

export const MainPage = () => {
  //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  //   const handleMouseMove = (e: React.MouseEvent) => {
  //     setMousePos({ x: e.clientX, y: e.clientY });
  //     console.log(mousePos);
  //   };

  // return (
  //   <div>
  //     <img
  //       src="assets/triangle.svg"
  //       onMouseMove={handleMouseMove}
  //       alt=""
  //       data-tip
  //       data-for="image"
  //     />
  //     <Tooltip target="image">
  //       <div>
  //         {mousePos.x + " " + mousePos.y}
  //       </div>
  //     </Tooltip>
  //   </div>
  // );

  const data = compendiumData;
  const storedSearch = useStore(searchStore);
  const [searchRes, setSearchRes] = useState<goldBrand[]>([]);

  const handleSearchClick = () => {
    setSearchRes(
      data.filter((i) => {
        const goldRegex = new RegExp(storedSearch.gold);
        const silverRegex = new RegExp(storedSearch.silver);
        if (
          goldRegex.test(i.percentage.gold) &&
          silverRegex.test(i.percentage.silver ? i.percentage.silver : "")
        ) {
          return i;
        }
      })
    );
  };

  console.log("filtred", searchRes);

  console.log("storedSearch", storedSearch);

  return (
    <div className="main__container">
      <div className="main__container-diagram">
        <img
          src="assets/diagram.png"
          className="main__container-diagram-image"
          alt=""
        />
      </div>
      <div className="main__container-search">
        <div className="main__container-search-field">
          <Input placeholder="Au" type="gold" />
          <Input placeholder="Ag" type="silver" />
          <Input placeholder="Cu" type="copper" />
          <Button onClick={() => handleSearchClick()} />
        </div>
        <div style={{ fontSize: 18, marginTop: 47, marginBottom: 28 }}>
          Информация по запросу:
        </div>
        <div className="main__container-search-result">
          <div className="main__container-search-result-inner">
            {searchRes.length > 0 &&
              searchRes.map((i) => {
                return (
                  <div key={i.brand} className="main__container-search-result-card">
                    <div>{i.brand}</div>
                    <div>{i.brand}</div>
                    <div>{i.brand}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
