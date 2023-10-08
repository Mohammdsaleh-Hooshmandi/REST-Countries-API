import { useState, useEffect, createContext } from "react";
const API_URL = 'https://restcountries.com/v3.1/all';

export const countryDataContext = createContext([]);

const CountryDataContextProvider = props => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(API_URL).then(response => response.json()).then(data => setData(data));
    }, []);

    return (
        <countryDataContext.Provider value={data}>
            {props.children}
        </countryDataContext.Provider>
    );
};

export default CountryDataContextProvider;