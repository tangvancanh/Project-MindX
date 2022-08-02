import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [theme,setTheme] = useState('darkTheme');

    const toggleTheme = () => {
        setTheme(theme === 'darkTheme' ? 'lightTheme' : 'darkTheme');
    }

    const valueTheme = {theme, toggleTheme};

    return (
        <ThemeContext.Provider value={valueTheme}>
            {children}
        </ThemeContext.Provider>
    )
}