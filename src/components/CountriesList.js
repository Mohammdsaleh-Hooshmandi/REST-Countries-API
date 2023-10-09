import { useContext } from "react";
import styled from "styled-components";
import { countryDataContext } from "../store/country-data";
import CountriesListItem from "./CountriesListItem";

const List = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
`;

const CountriesList = ({ filters }) => {
    const data = useContext(countryDataContext);


    let listItems;
    if (filters.region === 'all')
        listItems = data.map(country => <CountriesListItem key={country.flag} country={country} />);
    else
        listItems = data.filter(country => country.region === filters.region).filter(country => country.name.common.toLowerCase().includes(filters.name)).map(country => <CountriesListItem key={country.flag} country={country} />);

    return (
        <List>
            {listItems}
        </List>
    );
};

export default CountriesList;