import React, { useRef, useEffect, useCallback } from 'react'
import {CharData, DataVal, DataFuyuki, Container, Background, CloseModalButton} from "./styles"
import bgModalVal from "../../images/bgModalVal.png"
import bgModalDoug from "../../images/bgModalDoug.png"
import bgModalFuyuki from "../../images/bgModalFuyuki.png"


export function ModalVal({showModalVal, setShowModalVal}){

    const modalRef = useRef();

    const closeModal = e => {
        if (modalRef.current === e.target) {
            showModalVal(false);
        }
    };

    const keyPress = useCallback(
        e => {
          if (e.key === 'Escape' && showModalVal) {
            setShowModalVal(false);
            console.log('I pressed');
          }
        },
        [setShowModalVal, showModalVal]
    );

    useEffect(
        () => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );
    
    return (   
        <>  {   showModalVal ? (
                    <Background onPointerDown={closeModal} ref={modalRef}>
                        <Container>
                            <CloseModalButton aria-label='Close modal' onPointerDown={() => setShowModalVal(prev =>! prev)}/>
                            <img src={bgModalVal} alt="Arquivo investigativo da val" />
                        </Container>
                    </Background>
                ):null
            }
        </>
    );
}

export function ModalFuyuki({showModalFuyuki, setShowModalFuyuki}){
  
    const modalRef = useRef();

    const closeModal = e => {
        if (modalRef.current === e.target) {
            showModalFuyuki(false);
        }
    };

    const keyPress = useCallback(
        e => {
          if (e.key === 'Escape' && showModalFuyuki) {
            setShowModalFuyuki(false);
            console.log('I pressed');
          }
        },
        [setShowModalFuyuki, showModalFuyuki]
    );

    useEffect(
        () => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    return (
        <>  { showModalFuyuki ? (
                    <Background onPointerDown={closeModal} ref={modalRef}>
                        <Container>
                            <img src={bgModalFuyuki} alt="Arquivo investigativo do Fuyuki" />
                            <CloseModalButton aria-label='Close modal' onPointerDown={() => setShowModalFuyuki(prev=>  !prev)   }/>
                        </Container>
                    </Background>
                ) : null
            }
        </>
       
    );
}

export function ModalDoug({showModalDoug, setShowModalDoug}){

    const modalRef = useRef();

    const closeModal = e => {
        if (modalRef.current === e.target) {
            showModalDoug(false);
        }
    };

    const keyPress = useCallback(
        e => {
          if (e.key === 'Escape' && showModalDoug) {
            setShowModalDoug(false);
            console.log('I pressed');
          }
        },
        [setShowModalDoug, showModalDoug]
    );

    useEffect(
        () => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );
  
    return (
        <>  {   showModalDoug ? (
                    <Background onPointerDown={closeModal} ref={modalRef}>
                        <Container>
                            <img src={bgModalDoug} alt="Arquivo investigativo do Doug" />
                            <CloseModalButton aria-label='Close modal' onPointerDown={() => setShowModalDoug(prev => !prev)} />
                        </Container>
                    </Background>
                ) : null
            }
        </>
    );
}