import { Fragment } from "react";
import CountryDataContextProvider from "./store/country-data";
import CountriesList from "./components/CountriesList";
import Header from "./components/Layout/Header";
import FiltersWrapper from "./components/Filters/FiltersWrapper";

const App = () => {

	const filterByName = name => {
		console.log(name);
	};

	return (
		<Fragment>
			<Header />
			<main>
				<FiltersWrapper onFilterByName={filterByName} />
				<CountryDataContextProvider>
					<CountriesList />
				</CountryDataContextProvider>
			</main>
		</Fragment>
	);
}

export default App;