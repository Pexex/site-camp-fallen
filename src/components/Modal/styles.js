import styled from 'styled-components';
import { MdClose } from 'react-icons/md';


export const Container = styled.div`
    display: flex;
    align-items: center;
    max-width: 80vw;
    max-height: 70vh;
    position: absolute;
    /* transform: translateY(-4rem); */
    z-index: 9;

    & img {
        width: 100%;
        margin: 0 auto;
    }
`;

export const Background = styled.div`
width: 150%;
height: 200%;
background: rgba(0, 0, 0, 0.8);
position: fixed;
display: flex;  
justify-content: center;
align-items: center;
transform: translateY(-25rem);

@media (min-width: 870px){
    transform: translateY(-4.5rem);
}

@media (max-width: 869px){
    transform: translateY(-10rem);
}

@media (max-width: 579px){
    transform: translateY(-20rem);
}

`;

export const CharData = styled.div`
display: flex;
flex-direction:column;
max-width: 30vw;
align-items: flex-start;
flex-wrap: nowrap;
justify-content: flex-start;
text-align: justify;
line-height: 1.2rem;
transform: translate(5rem, -2rem);
position: absolute;
color: black;
float: left;
padding: .8rem;
z-index: 11;



& h2 {
    font-size: clamp(.2rem, .7rem, 1rem);
    font-weight: normal;
}

& p {
    /* padding-top: .5rem; */
    font-size: clamp(.2rem, .7rem, 1rem);
    font-weight: normal;
}


`;

export const DataVal = styled(CharData)`
    transform: translate(calc(5rem / 50vw), calc(-2rem / 100vh)) ;

    
    @media (min-width: 1075px){
        transform: translate(5rem, -2rem) ;
}  
`;

export const DataFuyuki = styled(CharData)`
    transform: translate(5rem, -5rem) ;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  left: 1.1rem;
  width: clamp(.5 rem, 1.25rem, 2rem);
  height: clamp(.5 rem, 1.25rem, 2rem);
  padding: 0;
  z-index: 19;
  color: black;
`;