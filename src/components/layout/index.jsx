import React from "react";
import Header from "../Header";
import { Container } from "./styles";
import CountDown from "../Counter/CountDown";
import Footer from "../Footer";
import CharButtons from "../CharButtons";

export default function Layout(){
    return(
        // <Container>
        //    <Header/>
           <CountDown/>
        //    <CharButtons />
        //    <Footer/>
        // </Container>
    );
}