import { useContext } from "react";
import styled from "styled-components";
import { countryDataContext } from "../store/country-data";
import CountriesListItem from "./CountriesListItem";

const List = styled.ul``;

const CountriesList = () => {
    const data = useContext(countryDataContext);

    const listItems = data.map(country => <CountriesListItem key={country.flag} country={country} />);

    return (
        <List>
            {listItems}
        </List>
    );
};

export default CountriesList;