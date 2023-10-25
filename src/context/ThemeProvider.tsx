import { ReactNode, useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const isDarkModeLocalStorage = localStorage.getItem("theme") === "dark" ? true : false;

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
