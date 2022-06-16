import { Link } from "react-router-dom";
import { compendiumData } from "../../../data/compendium-data";
import { setElemPageStore } from "../../../stores/elemPage.store";
import "./style.css";

export const Compendium: React.FC = () => {
  const data = compendiumData;

  return (
    <div className="compendium__table-container">
      <div className="compendium__table-inner-container">
        <div className="compendium__table-header">
          "Стандартные сплавы золота"
        </div>
        <div className="compendium__table-item">
          <div className="compendium__table-item-item">Марка</div>
          <div className="compendium__table-item-item">Проба</div>
          <div className="compendium__table-item-item">Цвет</div>
          <div className="compendium__table-item-item">Твердость (м/т)</div>
          <div className="compendium__table-item-item">Т Плавления</div>
        </div>
        {data.map((i) => {
          return (
            <div className="compendium__table-item" key={i.brand}>
              <Link to={`/compendium/${i.numberName}`}>
                <div
                  className="compendium__table-item-item linkable-item"
                  onClick={() => setElemPageStore(i)}
                >
                  {i.brand}
                </div>
              </Link>
              <div className="compendium__table-item-item">{i.probe}</div>
              <div className="compendium__table-item-item">{i.color}</div>
              <div className="compendium__table-item-item">
                {i.hardness ? i.hardness?.soft + "/" + i.hardness?.hard : "-"}
              </div>
              <div className="compendium__table-item-item">
                {i.temperature ? i.temperature : "-"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
