import { useStore } from "effector-react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { elemPageStore } from "../../../stores/elemPage.store";
import "./style.css";

export const DirectoryViewport = () => {
  const pageData = useStore(elemPageStore);

  return (
    <div>
      <div className="compendium__tabs">
        <NavLink
          to="/compendium"
          end
          className={({ isActive }) =>
            isActive ? "compendium__tabs-active-tab" : "compendium__tabs-tab"
          }
        >
          Стандартные сплавы золота
        </NavLink>
        <NavLink
          to={`/compendium/${pageData.numberName}`}
          className={({ isActive }) =>
            isActive ? "compendium__tabs-active-tab" : "compendium__tabs-tab"
          }
        >
          Информация по сплаву
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};
