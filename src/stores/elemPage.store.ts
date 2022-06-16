import { createEvent, restore } from "effector";
import { goldBrand } from "../data/compendium-data";

export const setElemPageStore = createEvent<goldBrand>();
export const elemPageStore = restore<goldBrand>(setElemPageStore, {
  brand: "ЗлСрМ 375-20",
  numberName: "375-20",
  probe: "375",
  percentage: {
    gold: "37,5 - 38,0",
    silver: "1,7 - 2,3",
    copper: "Ост.",
  },
  density: "11,24",
  temperature: "965-985",
  hardness: {
    hard: 235,
    soft: 130,
  },
  color: "Ярко-желтый",
});
