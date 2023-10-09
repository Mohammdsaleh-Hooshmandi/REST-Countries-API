
import { Fragment, useState } from "react";
import CountryDataContextProvider from "./store/country-data";
import CountriesList from "./components/CountriesList";
import Header from "./components/Layout/Header";
import FiltersWrapper from "./components/Filters/FiltersWrapper";

const App = () => {
	const [filters, setFilters] = useState({ region: 'all', name: '' })

	const filterByName = name => {
		setFilters(prevFilters => ({ ...prevFilters, name: name.toLowerCase() }));
	};

	const filterByRegion = region => {
		setFilters(prevFilters => ({ ...prevFilters, region: region }));
	};

	return (
		<Fragment>
			<Header />
			<main>
				<FiltersWrapper
					onFilterByName={filterByName}
					onFilterByRegion={filterByRegion}
				/>
				<CountryDataContextProvider>
					<CountriesList filters={filters} />
				</CountryDataContextProvider>
			</main>
		</Fragment>
	);
}

export default App;