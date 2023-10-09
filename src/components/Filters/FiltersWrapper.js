import styled from "styled-components";
import SearchBar from "./SearchBar";

const Wrapper = styled.div``;

const FiltersWrapper = props => {

    return (
        <Wrapper>
            <SearchBar onUserInput={props.onFilterByName} />
        </Wrapper>
    );
};

export default FiltersWrapper;