import { Link, useNavigate } from "react-router-dom";
import { ReadonlyInput } from "../../../components/input/input";
import { goldBrand } from "../../../data/compendium-data";
import "./style.css";

type BrandPageProps = {
  data?: goldBrand;
};

export const BrandPage: React.FC<BrandPageProps> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="brand-page__viewport">
      <div className="brand-page__header">
        <div
          onClick={() => navigate(-1)}
          className="brand-page__header-back-button"
        >
          <img src="/assets/back-icon.svg" alt="" />
          <div className="linkable-item" style={{ fontSize: "inherit" }}>
            Вернуться
          </div>
        </div>
        <div>
          Подробная информация по сплаву: <b>{data?.brand}</b>
        </div>
      </div>
      <div className="brand-page__container">
        <div className="brand-page__data-left">
          <ReadonlyInput
            inputName="Золото"
            defaultValue={data?.percentage.gold}
          />
          <ReadonlyInput
            inputName="Серебро"
            defaultValue={data?.percentage.silver}
          />
          <ReadonlyInput inputName="Марка" defaultValue={data?.brand} />
          <ReadonlyInput inputName="Проба" defaultValue={data?.probe} />
          <ReadonlyInput inputName="Расч. пл:" defaultValue={data?.density} />
          <ReadonlyInput
            inputName="Т. плав:"
            defaultValue={data?.temperature}
          />
          <ReadonlyInput inputName="Цвет" defaultValue={data?.color} />
        </div>
        <div className="brand-page__data-right"></div>
      </div>
    </div>
  );
};
