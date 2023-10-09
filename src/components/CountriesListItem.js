import styled from "styled-components";

const ListItem = styled.li``;

const CountriesListItem = ({ country }) => {

    return (
        <ListItem>
            <img src={country.flags.png} alt={country.flags.alt} />
            <h2>{country.name.common}</h2>

            <ul>
                <li>Population: {country.population}</li>
                <li>Region: {country.region}</li>
                <li>Capital: {country.capital}</li>
            </ul>
        </ListItem>
    );
};

export default CountriesListItem;