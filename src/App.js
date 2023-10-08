import CountryDataContextProvider from "./store/country-data";
import CountriesList from "./components/CountriesList";

const App = () => {

	return (
		<CountryDataContextProvider>
			<CountriesList />
		</CountryDataContextProvider>
	);
}

export default App;