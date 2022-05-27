import { createEvent, restore } from "effector";

export const setThemeStore = createEvent<boolean>();
export const themeStore = restore<boolean>(setThemeStore, false);
