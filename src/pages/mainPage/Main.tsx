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
                  <div
                    key={i.brand}
                    className="main__container-search-result-card"
                  >
                    <div className="main__container-search-result-card-data">
                      <div style={{ fontSize: 16 }}>Марка: </div>
                      <input
                        type="text"
                        value={i.brand}
                        style={{
                          width: 204,
                          height: 36,
                          border: "2px solid #E1E7EE",
                          borderRadius: "5px",
                          fontSize: 16,
                        }}
                      />
                    </div>
                    <div className="main__container-search-result-card-data">
                      <div style={{ fontSize: 16 }}>Проба: </div>
                      <input
                        type="text"
                        value={i.probe}
                        style={{
                          width: 204,
                          height: 36,
                          border: "2px solid #E1E7EE",
                          borderRadius: "5px",
                          fontSize: 16,
                        }}
                      />
                    </div>
                    <div className="main__container-search-result-card-data">
                      <div style={{ fontSize: 16 }}>Золото: </div>
                      <input
                        type="text"
                        value={i.percentage.gold}
                        style={{
                          width: 204,
                          height: 36,
                          border: "2px solid #E1E7EE",
                          borderRadius: "5px",
                          fontSize: 16,
                        }}
                      />
                    </div>
                    <div className="main__container-search-result-card-data">
                      <div style={{ fontSize: 16 }}>Серебро: </div>
                      <input
                        type="text"
                        value={i.percentage.silver ? i.percentage.silver : "-"}
                        style={{
                          width: 204,
                          height: 36,
                          border: "2px solid #E1E7EE",
                          borderRadius: "5px",
                          fontSize: 16,
                        }}
                      />
                    </div>
                    <div className="main__container-search-result-card-data">
                      <div style={{ fontSize: 16 }}>Медь: </div>
                      <input
                        type="text"
                        value={i.percentage.copper ? i.percentage.copper : "-"}
                        style={{
                          width: 204,
                          height: 36,
                          border: "2px solid #E1E7EE",
                          borderRadius: "5px",
                          fontSize: 16,
                        }}
                      />
                    </div>
                    <div className="main__container-search-result-card-data">
                      <div style={{ fontSize: 16 }}>Платина: </div>
                      <input
                        type="text"
                        value={i.percentage.platinum ? i.percentage.platinum : "-"}
                        style={{
                          width: 204,
                          height: 36,
                          border: "2px solid #E1E7EE",
                          borderRadius: "5px",
                          fontSize: 16,
                        }}
                      />
                    </div>
                    <div className="main__container-search-result-card-data">
                      <div style={{ fontSize: 16 }}>Никель: </div>
                      <input
                        type="text"
                        value={i.percentage.nickel ? i.percentage.nickel : "-"}
                        style={{
                          width: 204,
                          height: 36,
                          border: "2px solid #E1E7EE",
                          borderRadius: "5px",
                          fontSize: 16,
                        }}
                      />
                    </div><div className="main__container-search-result-card-data">
                      <div style={{ fontSize: 16 }}>Цинк: </div>
                      <input
                        type="text"
                        value={i.percentage.zinc ? i.percentage.zinc : "-"}
                        style={{
                          width: 204,
                          height: 36,
                          border: "2px solid #E1E7EE",
                          borderRadius: "5px",
                          fontSize: 16,
                        }}
                      />
                    </div><div className="main__container-search-result-card-data">
                      <div style={{ fontSize: 16 }}>Кадмий: </div>
                      <input
                        type="text"
                        value={i.percentage.cadmium ? i.percentage.cadmium : "-"}
                        style={{
                          width: 204,
                          height: 36,
                          border: "2px solid #E1E7EE",
                          borderRadius: "5px",
                          fontSize: 16,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
