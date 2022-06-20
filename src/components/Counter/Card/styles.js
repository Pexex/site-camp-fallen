import styled,{css} from 'styled-components'

export const TopCard = styled.div`
   top: 0px;
   width:100%;
   height:100%;
   display:flex;
   background-color:#2c2c44; 
   justify-content:center;
   align-items:center;
   text-align:center;
   overflow:hidden;
   position:absolute;
  
   backface-visibility: hidden;
   clip-path:inset(0 0 50% 0);
   color: whitesmoke;
   border-radius:0.8rem;

   ${props => props.bottom && css`
   background-color:hsl(236, 21%, 26%);
   clip-path:inset(50% 0 0 0);
  `}

  ${props => props.back && css`
  transform: rotateY(180deg) rotateZ(180deg);
  background-color:hsl(236, 21%, 26%);
  clip-path:inset(50% 0 0 0);
  `}`

export const CardWrapper = styled.div`
  /* display: flex; */
  position:relative;
  min-width: clamp(3rem, 1rem + 10vw, 5rem);
  height: clamp(2.5rem, 1rem + 10vh, 4.5rem);
  margin: 0.5rem;
  transform-style: preserve-3d;
  box-shadow: 0 0.71rem 0.57rem 0 rgba(0,0,0,0.8);
  perspective:75rem;
  font-size:clamp(2rem, .2rem + 7vw, 3rem);
  border-radius:0.8rem;
  /* align-self: center; */
  `

  export const Text = styled.span`
    color: #e4e4e4;
    font-Size:0.65rem;
    letter-spacing: 0.30rem;
    text-align: center;
  `;

  export const TextWrapper = styled.div`
    display: flex;
    min-width: clamp(3rem, 1rem + 10vw, 5rem);
    justify-content: center;
    /* border: 1px solid yellow; */
  `;

export const  Flipper = styled.div`
  position:relative;
  transform-style: preserve-3d;
  height:100%;
  z-index:2;`

export const Groove = styled.div`
  width:100%;
  background:linear-gradient(#282a41 50%,#34344da3);
 
  height:0.3rem;
  overflow:visible;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:300;
 

  &:before{
    background: #191a25;
    height: 0.8rem;
    width:0.55rem;
    border-radius: 0 0.4rem 0.4rem 0 ;
    display: inline-block;
    content: '';
    position:absolute;
    left:0rem;
}

  &:after{
    background: #191a25;
    height: 0.8rem;
    width:0.55rem;
    border-radius: 0.4rem 0rem 0rem 0.4rem ;
    display: inline-block;
    content: '';
    position:absolute;
    right:0rem;
}`