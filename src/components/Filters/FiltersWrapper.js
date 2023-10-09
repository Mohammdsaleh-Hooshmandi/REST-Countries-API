import styled from "styled-components";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";

const Wrapper = styled.div``;

const FiltersWrapper = props => {

    return (
        <Wrapper>
            <SearchBar onUserInput={props.onFilterByName} />
            <DropDown onUserSelect={props.onFilterByRegion} />
        </Wrapper>
    );
};

export default FiltersWrapper;