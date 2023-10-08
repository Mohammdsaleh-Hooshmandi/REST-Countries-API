import { useContext } from "react";
import styled from "styled-components";
import { countryDataContext } from "../store/country-data";

const List = styled.ul``;

const CountriesList = () => {
    const data = useContext(countryDataContext);

    const listItems = data.map(item => console.log(item));

    return (
        <List>
            {listItems}
        </List>
    );
};

export default CountriesList;