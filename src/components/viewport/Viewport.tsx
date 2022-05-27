import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Compendium } from "../../pages/directoryPage/compendium";
import { MainPage } from "../../pages/mainPage/Main";
import { HeaderLogo } from "../headerLogo/headerLogo";
import "./style.css";

export const Viewport = () => {
  return (
    <div className="viewport__viewport">
      <div className="viewport__header">
        <HeaderLogo />
        <div style={{ width: "100%" }}></div>
        <div className="viewport__header-buttons">
          <div>RU</div>
          <div style={{ width: 32, height: 32 }}>
            <img src="assets/sun-icon.svg" alt="sun.svg" />
          </div>
        </div>
      </div>
      <div className="viewport__sections">
        <div className="viewport__aside">
          <Link className="viewport__link" to="/">Главная</Link>
          <Link className="viewport__link" to="/compendium">Справочник</Link>
          {/* <Link to="/about">О проекте</Link> */}
        </div>
        <div className="viewport__content">
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/compendium" element={<Compendium />}></Route>
            {/* <Route path="/about" element={<div>about</div>}></Route> */}
          </Routes>
        </div>
      </div>
    </div>
  );
};
