import { useNavigate } from "react-router-dom";
import { ReadonlyInput } from "../../../components/input/input";
import { Slider } from "../../../components/slider/slider";
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
        <div style={{ margin: "25px auto" }}>
          <div>
            Подробная информация по сплаву: <b>{data?.brand}</b>
          </div>
        </div>
      </div>
      <div className="brand-page__container">
        <div className="brand-page__data-left">
          {!data?.imageSrc ? (
            <div className="brand-page__data-left-no-image"></div>
          ) : (
            <div className="brand-page__data-left-image">
              <img src={data?.imageSrc} alt={data?.imageSrc} />
            </div>
          )}

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
        <div className="brand-page__data-right">
          <div className="brand-page__data-right-content">
            ОПИСАНИЕ:
            <br />
            <br />
            Сплав ЗлСрМ 375-20 применяется: для производства скользящих
            контактов; ювелирных изделий (колец, сережек, перстней, медальонов,
            кулонов, брошей, цепочек).
          </div>
          <br />
          <div>
            ПРИМЕЧАНИЕ:
            <br />
            <br />
            Золото-серебряно-медный сплав. Сплав пригоден для всех видов
            холодной обработки и литья. Изделия из сплава 375-й пробы относятся
            к наиболее дешевым по ценам и относится к тускнеющим на воздухе, что
            ограничивает его применение.
          </div>
          <br />
          <div>
            Технологические свойства:
            <br />
            <br />
            Пригодны для всех видов холодной обработки и литья.
          </div>
        </div>
      </div>
    </div>
  );
};
