import { Fragment } from "react";
import CountryDataContextProvider from "./store/country-data";
import CountriesList from "./components/CountriesList";
import Header from "./components/Layout/Header";

const App = () => {

	return (
		<Fragment>
			<Header />
			<main>
				<CountryDataContextProvider>
					<CountriesList />
				</CountryDataContextProvider>
			</main>
		</Fragment>
	);
}

export default App;