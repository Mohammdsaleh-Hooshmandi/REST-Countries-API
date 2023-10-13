import { useContext } from "react";
import styled from "styled-components";
import { countryDataContext } from "../store/country-data";
import CountriesListItem from "./CountriesListItem";
import ShowError from "./UI/ShowError";
import Loader from "./UI/Loader";

const List = styled.ul`
    max-width: 150rem;
    margin: 5rem auto 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
    place-items: center;

    @media (max-width: 1300px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 650px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const CountriesList = ({ filters }) => {
    const data = useContext(countryDataContext);

    if (typeof data === 'string') return <ShowError>{data}</ShowError>;

    if (data.length === 0) return <Loader />;

    let listItems;
    if (filters.region !== 'all' && filters.name === '')
        listItems = data.filter(country => country.region === filters.region)
            .map(country => <CountriesListItem key={country.flag} country={country} />);

    if (filters.region !== 'all' && filters.name !== '')
        listItems = data.filter(country => country.region === filters.region)
            .filter(country => country.name.common.toLowerCase().includes(filters.name))
            .map(country => <CountriesListItem key={country.flag} country={country} />);

    if (filters.region === 'all' && filters.name !== '')
        listItems = data.filter(country => country.name.common.toLowerCase().includes(filters.name))
            .map(country => <CountriesListItem key={country.flag} country={country} />);

    if (filters.region === 'all' && filters.name === '')
        listItems = data.map(country => <CountriesListItem key={country.flag} country={country} />);

    return (
        <List>
            {listItems}
        </List>
    );
};

export default CountriesList;