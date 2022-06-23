import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    position: relative;
    /* top: 59vh; */
    width: 100vw;
    min-height: 2rem;
    align-items: center;
    justify-content: space-evenly;
    background: linear-gradient(45deg, rgba(0,0,0,0.2945553221288515) 0%, rgba(0,0,0,0.82) 17%, rgba(0,0,0,.85) 50%, rgba(0,0,0,0.82) 83%, rgba(3,3,3,0.29) 100%);
    padding: .8rem 0 .8rem 0;
    z-index: -1;
    transform: translateY(8rem);
`;

export const FooterText = styled.h6`
    font-size: .6rem;
    color: whitesmoke;
    font-weight: normal;
    line-height: 1rem;
`;
