import { useState } from "react";
import { ThemeProvider } from "styled-components";
import lightTheme from "./light";
import darkTheme from "./dark";

const ChangeThemeProvider = ({ children }) => {
    const [themeColor, setThemeColor] = useState(lightTheme);

    const themeChangeHandler = () => {
        setThemeColor(prevTheme => prevTheme.id === 'light' ? darkTheme : lightTheme);
    }

    return (
        <ThemeProvider theme={{ ...themeColor, changeTheme: themeChangeHandler }}>
            {children}
        </ThemeProvider>
    );
};

export default ChangeThemeProvider;