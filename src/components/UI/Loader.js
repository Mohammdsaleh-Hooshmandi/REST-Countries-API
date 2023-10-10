import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
    text-align: center;
`;

const rotateAnimation = keyframes`
    from {
        transform: rotateZ(0);
    }

    to {
        transform: rotateZ(360deg);
    }
`;

const Sppiner = styled.div`
    width: 5rem;
    height: 5rem;
    border-top: 3px solid ${p => p.theme.color_1};
    border-left: 3px solid ${p => p.theme.color_1};
    margin: 0 auto;
    border-radius: 50%;
    animation: ${rotateAnimation} 1.3s linear infinite;
`;

const Loader = () => {

    return (
        <Wrapper>
            <Sppiner />
        </Wrapper>
    );
};

export default Loader;