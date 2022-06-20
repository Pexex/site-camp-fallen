import { createGlobalStyle } from "styled-components";
import background from "../images/background.jpg"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: "Lato", sans-serif;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    #root {
        height: 100vh;
    }
    body {
        background: black url(${background}) repeat top center;
        background-size:cover;
    }
`;