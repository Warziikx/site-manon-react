import { ReactNode, createContext, useContext, useMemo, useState } from "react";

interface IThemeContext {
	dark: boolean;
	toggleDark: (value: boolean) => void;
}
const defaultState = { dark: false, toggleDark: () => {} } as IThemeContext;

const ThemeContext = createContext<IThemeContext>(defaultState);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [dark, setDark] = useState<boolean>(false);
	const toggleDark = (value: boolean) => {
		console.log("Hello");
		setDark(value);
		const root = window.document.documentElement;
		const oldThemeAsText = !value ? "light" : "dark";
		const themeAsText = value == true ? "light" : "dark";
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
