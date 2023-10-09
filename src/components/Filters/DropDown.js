import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const List = styled.ul``;

const DropDown = props => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState('Filter by Region')

    const openDropDownHandler = () => {
        setIsOpen(preState => !preState);
    };

    const selectItemHandler = event => {
        const selectedItem = event.target.textContent;
        if (selectedItem === 'Show All') {
            setSelectedRegion('Filter by Region');
            props.onUserSelect('all');
            setIsOpen(false);
            return;
        }

        setSelectedRegion(selectedItem);
        props.onUserSelect(event.target.textContent);
        setIsOpen(false);
    };

    return (
        <Wrapper>
            <button
                type="button"
                onClick={openDropDownHandler}
            >
                {selectedRegion}
            </button>

            {isOpen &&
                <List>
                    <li onClick={selectItemHandler}>Show All</li>
                    <li onClick={selectItemHandler}>Asia</li>
                    <li onClick={selectItemHandler}>Americas</li>
                    <li onClick={selectItemHandler}>Africa</li>
                    <li onClick={selectItemHandler}>Europe</li>
                    <li onClick={selectItemHandler}>Oceania</li>
                </List>}
        </Wrapper>
    );
};

export default DropDown;