import styled from "styled-components";
import { Link } from "react-router-dom";

const ListItem = styled.li`
    width: 28rem;
    background-color: ${p => p.theme.color_2};
    color: ${p => p.theme.color_1};
    box-shadow: 2px 0 10px ${p => p.theme.color_4};

    > img {
        width: 100%;
        height: 16rem;
    }

    > div {
        padding: 1rem 0 1rem 2rem;
    }

    .coutry-name {
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    li {
        font-size: 1.4rem;
    }

    li span {
        font-weight: 600;
    }
`;

const DetailLink = styled(Link)`
    text-decoration: none;
`;

const CountriesListItem = ({ country }) => {

    return (
        <DetailLink to={country.name.common}>
            <ListItem>
                <img src={country.flags.png} alt={country.flags.alt} />

                <div>
                    <h2 className="coutry-name">{country.name.common}</h2>
                    <ul>
                        <li><span>Population:</span> {country.population}</li>
                        <li><span>Region:</span> {country.region}</li>
                        <li><span>Capital:</span> {country.capital}</li>
                    </ul>
                </div>
            </ListItem>
        </DetailLink>
    );
};

export default CountriesListItem;