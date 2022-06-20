import styled from "styled-components";


export const Container = styled.header`
    display: flex;
    width: 100vw;
    min-height: 3rem;
    align-items: center;

    & a{
        justify-self: center;
        text-decoration: none;
        right: 1rem;
        color: whitesmoke;
        position: absolute;
    }
`;

export const Logo = styled.div`
    float: left;
    margin-left: 1rem;
    margin-top: 1rem;

    & img {
        width: clamp(5rem, 1rem + 10vw, 8rem);
    }
`;


