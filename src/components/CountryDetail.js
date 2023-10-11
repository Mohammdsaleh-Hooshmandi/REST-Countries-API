import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./UI/Loader";
import ShowError from "./UI/ShowError";

const CountryDetail = () => {
    const [datailData, setDetailData] = useState(null);
    const [isDataLoading, setIsDataLoading] = useState(false);

    const { countryName } = useParams();
    console.log(countryName);
    console.log(datailData);
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
        <main>
            {isDataLoading && <Loader />}

            {!isDataLoading && datailData &&
                <div>
                    <img src={datailData.flags.png} alt={datailData.flags.alt} />

                    <div>
                        <h2>{datailData.name.common}</h2>

                        <ul>
                            <li><span>Native Name:</span></li>
                            <li><span>Population:</span>{datailData.population}</li>
                            <li><span>Region:</span>{datailData.region}</li>
                            <li><span>Sub Region:</span>{datailData.subregion}</li>
                            <li><span>Capital:</span>{datailData.capital}</li>
                            <li><span>Top Level Domian:</span>{datailData.tld.at(0)}</li>
                        </ul>

                        <div>
                            <p>Borders</p>
                            <div>
                                {datailData?.borders}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </main>
    );
};

export default CountryDetail;