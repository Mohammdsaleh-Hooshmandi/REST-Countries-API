import CountryDataContextProvider from "./store/country-data";

const App = () => {

	return (
		<CountryDataContextProvider>
			<h1>Hello from React.js</h1>
		</CountryDataContextProvider>
	);
}

export default App;