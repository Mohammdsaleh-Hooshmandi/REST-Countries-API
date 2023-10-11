import GlobalStyle from "./Theme/GlobalStyle";
import ChangeThemeProvider from "./Theme/ChangeThemeProvider";
import RoutsProvider from "./pages/RoutProvider";

const App = () => {

	return (
		<ChangeThemeProvider>
			<GlobalStyle />
			<RoutsProvider />
		</ChangeThemeProvider>
	);
};

export default App;