import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Theme/GlobalStyle";
import darkTheme from "./Theme/dark";
import lightTheme from "./Theme/light";
import RoutsProvider from "./pages/RoutProvider";

const App = () => {
	const [themeColor, setThemeColor] = useState(lightTheme);

	const themeChangeHandler = () => {
		setThemeColor(prevTheme => prevTheme.id === 'light' ? darkTheme : lightTheme);
	}

	return (
		<ThemeProvider theme={{ ...themeColor, changeTheme: themeChangeHandler }}>
			<GlobalStyle />
			<RoutsProvider />
		</ThemeProvider>
	);
};

export default App;