import styled from "styled-components";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
    padding: 0 5%;

    @media (max-width: 556px) {
        flex-direction: column;
    }
`;

const FiltersWrapper = props => {

    return (
        <Wrapper>
            <SearchBar onUserInput={props.onFilterByName} />
            <DropDown onUserSelect={props.onFilterByRegion} />
        </Wrapper>
    );
};

export default FiltersWrapper;