import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Theme/GlobalStyle";
import MainWrapper from "./components/Layout/MainWrapper";
import CountryDataContextProvider from "./store/country-data";
import CountriesList from "./components/CountriesList";
import Header from "./components/Layout/Header";
import FiltersWrapper from "./components/Filters/FiltersWrapper";
import darkTheme from "./Theme/dark";
import lightTheme from "./Theme/light";

const App = () => {
	const [filters, setFilters] = useState({ region: 'all', name: '' });
	const [themeColor, setThemeColor] = useState(lightTheme);

	const filterByName = name => {
		setFilters(prevFilters => ({ ...prevFilters, name: name.toLowerCase() }));
	};

	const filterByRegion = region => {
		setFilters(prevFilters => ({ ...prevFilters, region: region }));
	};

	const themeChangeHandler = () => {
		setThemeColor(prevTheme => prevTheme.id === 'light' ? darkTheme : lightTheme);
	}

	return (
		<ThemeProvider theme={{ ...themeColor, changeTheme: themeChangeHandler }}>
			<GlobalStyle />
			<Header />
			<MainWrapper>
				<FiltersWrapper
					onFilterByName={filterByName}
					onFilterByRegion={filterByRegion}
				/>
				<CountryDataContextProvider>
					<CountriesList filters={filters} />
				</CountryDataContextProvider>
			</MainWrapper>
		</ThemeProvider>
	);
}

export default App;