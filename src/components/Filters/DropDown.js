import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    > button {
        width: 20rem;
        border: none;
        padding: 1rem 3rem;
        font-size: 1.6rem;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 2px 0 10px ${p => p.theme.color_4};
        border-radius: 4px;
        background-color: ${p => p.theme.color_2};
        color: ${p => p.theme.color_1};
    }
`;

const List = styled.ul`
    width: 17.5rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: .5rem;
    background-color: ${p => p.theme.color_2};
    color: ${p => p.theme.color_1};
    box-shadow: 2px 0 10px ${p => p.theme.color_4};

    > li {
        font-size: 1.4rem;
        cursor: pointer;
        font-weight: 600;

        &:hover,
        &:active {
            font-weight: 800;
        }
    }
`;

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