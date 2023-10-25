import { createContext, useContext } from "react";

interface IThemeContext {
	dark: boolean;
	toggleDark: (value: boolean) => void;
}
const isDarkModeLocalStorage = localStorage.getItem('theme') === "dark" ? true : false;
const defaultState = { dark: isDarkModeLocalStorage, toggleDark: () => { } } as IThemeContext;

export const ThemeContext = createContext<IThemeContext>(defaultState);

export default function useThemeContext() {
	return useContext(ThemeContext);
}
