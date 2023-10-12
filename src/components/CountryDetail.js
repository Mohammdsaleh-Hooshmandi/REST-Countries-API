import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "./UI/Loader";
import ShowError from "./UI/ShowError";

const Main = styled.main`
    width: 100%;
    height: 100vh;
    padding: 10rem 8rem;

    @media (max-width: 920px) {
        padding: 5rem 4rem;
    }

    @media (max-width: 420px) {
        padding: 5rem 2rem;
    }
`;

const BackLink = styled(Link)`
    font-size: 1.6rem;
    text-decoration: none;
    color: ${p => p.theme.color_1};
    box-shadow: 2px 0 10px ${p => p.theme.color_4};
    padding: .5rem 2rem;
    font-weight: 600;
    border-radius: 5px;
`;

const ContentsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 10rem;
    margin-top: 5rem;
    color: ${p => p.theme.color_1};

    > img {
        max-width: 32rem;
    }

    h2 {
        font-size: 3rem;
    }

    @media (max-width: 920px) {
        flex-direction: column;
        gap: 4rem;
    }
`;

const DetailsList = styled.ul`
    display: flex;
    gap: 5rem;
    margin-top: 2rem;

    li {
        font-size: 1.4rem;
        margin-top: .5rem;
    }

    li span {
        font-weight: 600;
        margin-right: .3rem;
    }

    @media (max-width: 420px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

const BordersWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3rem;

    > p {
        font-size: 1.4rem;
        font-weight: 600;
        margin-right: .5rem;
    }

    > div {
        display: flex;
        gap: 1rem;
    }
`;

const BorderLink = styled(Link)`
    font-size: 1.2rem;
    font-weight: 300;
    text-decoration: none;
    color: ${p => p.theme.color_1};
    border: .5px solid ${p => p.theme.color_1};
    border-radius: 5px;
    padding: .1rem 1rem;
`;

const CountryDetail = () => {
    const [datailData, setDetailData] = useState(null);
    const [isDataLoading, setIsDataLoading] = useState(false);
    const { countryName } = useParams();

    useEffect(() => {
        setIsDataLoading(true);
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(response => {
                if (!response.ok) throw new Error(`${response.status}Error`);
                return response.json();
            })
            .then(data => {
                setDetailData(data[0]);
                setIsDataLoading(false);
            })
            .catch(error => setDetailData(error.message + ', Try Again...'));
    }, []);

    if (typeof datailData === 'string') return <ShowError>{datailData}</ShowError>

    return (
        <Main>
            {isDataLoading && <Loader />}

            {!isDataLoading && datailData &&
                <div>
                    <BackLink to='/REST-Countries-API'>Back</BackLink>
                    <ContentsWrapper>
                        <img src={datailData.flags.png} alt={datailData.flags.alt} />

                        <div>
                            <h2>{datailData.name.common}</h2>

                            <DetailsList>
                                <div>
                                    <li><span>Population:</span>{datailData.population}</li>
                                    <li><span>Region:</span>{datailData.region}</li>
                                    <li><span>Sub Region:</span>{datailData.subregion}</li>
                                    <li><span>Capital:</span>{datailData.capital}</li>
                                </div>
                                <div>
                                    <li><span>Top Level Domian:</span>{datailData.tld.at(0)}</li>
                                    <li><span>Currencies:</span>{datailData?.currencies && Object.keys(datailData?.currencies).at(0)}</li>
                                    <li><span>Languages:</span>{datailData?.languages && Object.values(datailData?.languages).map(language => `${language}, `)}</li>
                                </div>
                            </DetailsList>

                            <BordersWrapper>
                                <p>Borders:</p>
                                <div>
                                    {
                                        datailData?.borders ?
                                            datailData?.borders.map(border => <BorderLink to={`/REST-Countries-API/${border}`} key={border}>{border}</BorderLink>)
                                            :
                                            'This country has no borders'
                                    }
                                </div>
                            </BordersWrapper>
                        </div>
                    </ContentsWrapper>
                </div>
            }
        </Main>
    );
};

export default CountryDetail;