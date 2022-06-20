import React,{useState,useEffect} from "react";
import { TopCard, CardWrapper, Flipper, Groove, Text, TextWrapper } from "./styles";

export default function Card({time,type,nextTime}) {
    useEffect(() => {
      document.getElementById(type).animate([{transform: 'rotatex(0deg)'},{transform:' rotatex(-180deg)'}],{duration:1000,fill:'forwards'})
    },[time])
  
  return (
    <div>
      <CardWrapper>
        <Flipper id={type}> 
       <TopCard >
       <Groove>            
           {time}
        </Groove>
       </TopCard>
       <TopCard back>
           <Groove>{nextTime}</Groove>
       </TopCard>
       </Flipper> 
       <TopCard bottom>
         <Groove>{time}</Groove>
       </TopCard>
       <TopCard hidden>
           <Groove>{nextTime}</Groove>
       </TopCard>
      </CardWrapper> 
      <TextWrapper>
        <Text>{type.toUpperCase()}</Text> 
      </TextWrapper>
    </div>
  )
}