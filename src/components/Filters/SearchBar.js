import { useEffect, useState } from "react";
import styled from "styled-components";

const Input = styled.input``;

const InputWrapper = styled.div``;

const SearchBar = props => {
    const [enteredName, setEnterdName] = useState('');

    const inputChangeHandler = event => {
        setEnterdName(event.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            props.onUserInput(enteredName);
        }, 1000);

        return () => clearTimeout(timer);
    }, [enteredName]);

    return (
        <InputWrapper>
            <i className="fa-solid fa-magnifying-glass" />
            <Input onChange={inputChangeHandler} value={enteredName} />
        </InputWrapper>
    );
};

export default SearchBar;