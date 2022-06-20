import React, {useState} from "react";
import { Container } from "./styles";
import Val from "../../images/val.png";
import Fuyuki from "../../images/fuyuki.png";
import Doug from "../../images/doug.png";
import {ModalDoug, ModalFuyuki, ModalVal} from "../Modal";

export default function CharButtons(){

    const [showModalVal, setShowModalVal] = useState(false);
    const [showModalFuyuki, setShowModalFuyuki] = useState(false);
    const [showModalDoug, setShowModalDoug] = useState(false);
    
    const openModalVal = () => {
        setShowModalVal(prev => !prev);
    };
    
    const openModalFuyuki = () => {
        setShowModalFuyuki(prev => !prev);
    };
    
    const openModalDoug = () => {
        setShowModalDoug(prev => !prev);
    };

    return(
        <Container>
            <img src={Val} alt="Polaroid Val" onPointerDown={openModalVal} />
            <img src={Fuyuki} alt="Polariod Fuyuki" onPointerDown={openModalFuyuki} />
            <img src={Doug} alt="Polariod Doug" onPointerDown={openModalDoug} />
            <ModalVal showModalVal={showModalVal} setShowModalVal={setShowModalVal}/>
            <ModalFuyuki showModalFuyuki={showModalFuyuki} setShowModalFuyuki={setShowModalFuyuki}/>
            <ModalDoug showModalDoug={showModalDoug} setShowModalDoug={setShowModalDoug}/>
        </Container>
    );
}