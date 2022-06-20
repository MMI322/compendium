import { useStore } from "effector-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AboutPage } from "../../pages/aboutPage/aboutPage";
import { BrandPage } from "../../pages/directoryPage/brandPage/brandPage";
import { Compendium } from "../../pages/directoryPage/directory/compendium";
import { DirectoryViewport } from "../../pages/directoryPage/viewport/directoryViewport";
import { MainPage } from "../../pages/mainPage/Main";
import { elemPageStore } from "../../stores/elemPage.store";
import { setThemeStore, themeStore } from "../../stores/theme.store";
import "./style.css";

export const Viewport = () => {
  const data = useStore(elemPageStore);
  const isDark = useStore(themeStore);

  return (
    <div className="viewport__viewport">
      <div className="viewport__header">
        <div className="viewport__header-logo">
          <Link to="/">
            <img src="assets/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="viewport__header-links">
          <NavLink
            className={({ isActive }) =>
              isActive ? "viewport__link-active" : "viewport__link"
            }
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "viewport__link-active" : "viewport__link"
            }
            to="/compendium"
          >
            Справочник
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "viewport__link-active" : "viewport__link"
            }
            to="/about"
          >
            О проекте
          </NavLink>
        </div>
        <div className="viewport__header-buttons">
          <div>RU</div>
          <div style={{ width: 32, height: 32 }} onClick={() => {isDark ? setThemeStore(false) : setThemeStore(true)}}>
            <img src={ isDark ? "assets/moon-icon.svg" : "assets/sun-icon.svg"} alt="sun.svg" />
          </div>
        </div>
      </div>
      <div className="viewport__content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/compendium" element={<DirectoryViewport />}>
            <Route index element={<Compendium />} />
            <Route
              path={`/compendium/${data.numberName}`}
              element={<BrandPage data={data} />}
            />
          </Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
};
