import styled from "styled-components";

const Wrapper = styled.div`
    text-align: center;
    font-size: 2.5rem;
    > h1 {
        font-weight: 600;
        color: ${p => p.theme.color_1};
    }

    @media (max-width: 556px) {
        > h1 {
            font-size: 2rem;
        }
    }

`;

const ShowError = ({ children }) => {

    return (
        <Wrapper>
            <h1>{children}</h1>
        </Wrapper>
    );
};

export default ShowError;