import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }

    html {
        width: auto;
        height: 100%;
    }
    body {
        max-width: 100vh;
        height: 100%;
        margin: 0;
        background-image: linear-gradient(black, rgba(78, 17, 125, 1));
        background-repeat: no-repeat;
        background-attachment: fixed;
        padding-top: ${(props) => (props.isAuthPage ? '0' : '6rem')};
    }
`;
