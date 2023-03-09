import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    h1, h2, h3, h4, h5, h6 {
        font-size: 62,5%;
        font-family: Montserrat, sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    } 
`;
