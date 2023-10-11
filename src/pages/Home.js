import { Fragment, useState } from "react";
import MainWrapper from "../components/Layout/MainWrapper";
import FiltersWrapper from "../components/Filters/FiltersWrapper";
import CountryDataContextProvider from "../store/country-data";
import CountriesList from "../components/CountriesList";

const HomePage = () => {
    const [filters, setFilters] = useState({ region: 'all', name: '' });

    const filterByName = name => {
        setFilters(prevFilters => ({ ...prevFilters, name: name.toLowerCase() }));
    };

    const filterByRegion = region => {
        setFilters(prevFilters => ({ ...prevFilters, region: region }));
    };

    return (
        <Fragment>
            <MainWrapper>
                <FiltersWrapper
                    onFilterByName={filterByName}
                    onFilterByRegion={filterByRegion}
                />
                <CountryDataContextProvider>
                    <CountriesList filters={filters} />
                </CountryDataContextProvider>
            </MainWrapper>
        </Fragment>
    );
};

export default HomePage;