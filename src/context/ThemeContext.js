import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [contextTheme, setContextTheme] = useState('Light');
    return (
        <ThemeContext.Provider value={{
            contextTheme, 
            setContextTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}