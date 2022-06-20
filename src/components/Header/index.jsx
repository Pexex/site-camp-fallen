import React from "react";
import { Container, Logo } from "./styles.js";
import logoArts from "../../images/A_RED.png"
import thumb from "../../images/thumb.png"
import teaser from "../../videos/camp-fallen-teaser.mp4"

export default function Header(){
    return(
        <Container>
            <Logo>
                <img src={logoArts} alt="Logo ARTS" />
            </Logo>
            <a href="#" target="_blank">Assista ao Teaser</a>
        </Container>
    );
}