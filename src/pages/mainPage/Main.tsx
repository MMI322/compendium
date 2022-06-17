import { useStore } from "effector-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button/button";
import { Input, ReadonlyInput } from "../../components/input/input";
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
          <Input placeholder="Au" type="gold" width="50px" />
          <Input placeholder="Ag" type="silver" width="50px" />
          <Input placeholder="Cu" type="copper" width="50px" />
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
                      <ReadonlyInput defaultValue={i.brand} />
                    </div>
                    <div className="main__container-search-result-card-data">
                      <div style={{ fontSize: 16 }}>Проба: </div>
                      <ReadonlyInput defaultValue={i.probe} />
                    </div>
                    <div className="main__container-search-result-card-data">
                      <div style={{ fontSize: 16 }}>Расч. пл: </div>
                      <ReadonlyInput defaultValue={i.density} />
                    </div>
                    <div className="linkable-item main__container-search-result-card-data" style={{justifyContent: "flex-end", height: "50px"}}>
                      <Link className="linkable-item" to={`/compendium/${i.numberName}`}>Подробнее</Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="main__container-search-result-card">
                <div className="main__container-search-result-card-data">
                  <div style={{ height: "360px", display: "flex" }}>
                    <div style={{ fontSize: 16, margin: "10px" }}>
                      Для поиска введите состав сплава и нажмите кнопку "найти"
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
