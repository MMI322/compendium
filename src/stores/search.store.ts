import { createEvent, restore } from "effector";

type SearchingType = {
  gold: string;
  silver: string;
  copper: string;
};

export const setSearchStore = createEvent<SearchingType>();
export const searchStore = restore<SearchingType>(setSearchStore, {
  gold: "",
  silver: "",
  copper: "",
});
