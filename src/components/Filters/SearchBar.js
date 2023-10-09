import { useEffect, useState } from "react";
import styled from "styled-components";

const Input = styled.input`
    width: 30rem;
    height: 3rem;
    border: none;
    margin-left: 1rem;
    font-size: 1.3rem;
    font-weight: 600;
    background-color: transparent;
    color: ${p => p.theme.color_1};

    &::placeholder {
        color: ${p => p.theme.color_1};
    }

    &:focus {
        outline: none;
    }
`;

const InputWrapper = styled.div`
    box-shadow: 2px 0 10px ${p => p.theme.color_4};
    padding: 1rem;
    border-radius: 5px;
    background-color: ${p => p.theme.color_2};
    color: ${p => p.theme.color_1};

    > i {
        font-size: 1.4rem;
    }
`;

const SearchBar = props => {
    const [enteredName, setEnterdName] = useState('');

    const inputChangeHandler = event => {
        setEnterdName(event.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            props.onUserInput(enteredName);
        }, 500);

        return () => clearTimeout(timer);
    }, [enteredName]);

    return (
        <InputWrapper>
            <i className="fa-solid fa-magnifying-glass" />
            <Input onChange={inputChangeHandler} value={enteredName} placeholder="Search for a coutry..." />
        </InputWrapper>
    );
};

export default SearchBar;