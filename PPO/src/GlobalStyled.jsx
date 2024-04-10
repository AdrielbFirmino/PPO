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
        font-size: 62.5%;
        @media (max-width: 1440px) {
            font-size: 55%;
        }
        @media (max-width: 1024px) {
            font-size: 50%;
        }
        @media (max-width: 768px) {
            font-size: 40%;
        }
    }
    body {
        font-size: 1.6rem;
        max-width: 100vw;
        margin: 0;
        background-image: linear-gradient(black, rgba(78, 17, 125, 1));
        background-repeat: no-repeat;
        background-attachment: fixed;
        padding-top: ${(props) => (props.isAuthPage ? '0' : '6rem')};
    }
`;
