import { ReactNode, createContext, useContext, useMemo, useState } from "react";

interface IThemeContext {
	dark: boolean;
	toggleDark: (value: boolean) => void;
}
let isDarkModeLocalStorage = localStorage.getItem('theme') === "dark" ? true : false;
const defaultState = { dark: isDarkModeLocalStorage, toggleDark: () => { } } as IThemeContext;

const ThemeContext = createContext<IThemeContext>(defaultState);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [dark, setDark] = useState<boolean>(isDarkModeLocalStorage);
	const toggleDark = (value: boolean) => {
		setDark(value);
		const root = window.document.documentElement;
		const oldThemeAsText = value ? "light" : "dark";
		const themeAsText = value == true ? "dark" : "light";
		root.classList.remove(oldThemeAsText);
		root.classList.add(themeAsText);
		localStorage.setItem("theme", themeAsText);
	};

	const memoedValue = useMemo(
		() => ({
			dark,
			toggleDark,
		}),
		[dark]
	);

	return <ThemeContext.Provider value={memoedValue}>{children}</ThemeContext.Provider>;
};

export default function useThemeContext() {
	return useContext(ThemeContext);
}
