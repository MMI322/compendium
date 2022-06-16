import { useStore } from "effector-react";
import React, { useState } from "react";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Triangle } from "../../components/triangle/triangle";
import { compendiumData, goldBrand } from "../../data/compendium-data";
import { searchStore } from "../../stores/search.store";
import Test from "../test/test";
import "./style.css";

export const MainPage = () => {
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
        <Test />
      </div>
      <div className="main__container-search">
        <div className="main__container-search-triangle">
          <Triangle />
        </div>
        <div className="main__container-search-field">
          <Input placeholder="Au" type="gold" />
          <Input placeholder="Ag" type="silver" />
          <Input placeholder="Cu" type="copper" />
          <Button onClick={() => handleSearchClick()} />
        </div>
        <div className="main__container-search-result">
          <div className="main__container-search-result-inner">
            {searchRes.length > 0 ? (
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
                        defaultValue={i.brand}
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
                        defaultValue={i.probe}
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
                      <div style={{ fontSize: 16 }}>Расч. пл: </div>
                      <input
                        type="text"
                        defaultValue={i.density}
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
              })
            ) : (
              <div className="main__container-search-result-card">
                <div className="main__container-search-result-card-data">
                <div style={{ fontSize: 16 }}>Расч. пл: </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
