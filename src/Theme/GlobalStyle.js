import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Nunito Sans', sans-serif;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: ${p => p.theme.color_3};
    }
`;

export default GlobalStyle;