import { compendiumData } from "../../data/compendium-data";
import "./style.css"

export const Compendium: React.FC = () => {
  const data = compendiumData;

  return (
    <div className="compendium__table-container">
        <div className="compendium__table-inner-container">
      {data.map((i) => {
        return (
          <div className="compendium__table-item">
            <div className="compendium__table-item-item">{i.brand}</div>
            <div className="compendium__table-item-item">{i.probe}</div>
            <div className="compendium__table-item-item">{i.color}</div>
            <div className="compendium__table-item-item">{i.hardness ? i.hardness?.soft + "/" + i.hardness?.hard : "-"}</div>
            <div className="compendium__table-item-item">{i.temperature ? i.temperature : "-"}</div>
          </div>
        );
      })}
      </div>
    </div>
  );
};
