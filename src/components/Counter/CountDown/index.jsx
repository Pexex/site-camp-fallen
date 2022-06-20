import React, {useState,useEffect} from "react";
import {CountDownWrapper} from "./styles"
import Card from "../Card";

export default function CountDown() {
    const start = new Date(2022, 6, 8);
    const current = start - Date.now();
    const [seconds, setSeconds] = useState(Math.floor((current/1000))%60);
    const [minutes, setMinutes] = useState(Math.floor((current/(1000*60)))%60);
    const [hours, setHours] = useState(Math.floor((current/(1000*60*60)))%24);
    const [days, setDays] = useState(Math.floor((current/(1000*60*60*24))));

    useEffect(() => {
        const interval = setInterval(() => {
            const current = start - Date.now();
            if(current>=0){
            const s = Math.floor((current/1000))%60;
            const m = Math.floor((current/(1000*60)))%60;
            const h = Math.floor((current/(1000*60*60)))%24;
            const d = Math.floor((current/(1000*60*60*24)));
            setSeconds(s);
            setMinutes(m);
            setHours(h);
            setDays(d);
            console.log(d,h,m,s);
            }
            else 
            clearInterval(interval);
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <CountDownWrapper>
            <Card time={days+1<10?`0${days+1}`:`${days+1}`}  nextTime={days<10?`0${days}`:`${days}`} type={'Dias'}/>
            <Card time={hours+1==24?'00':hours+1<10?`0${hours+1}`:`${hours+1}`} nextTime={hours<10?`0${hours}`:`${hours}`} type={'Horas'} />
            <Card time={minutes+1==60?'00':minutes+1<10?`0${minutes+1}`:`${minutes+1}`} nextTime={minutes<10?`0${minutes}`:`${minutes}`} type={'Mins'}/>
            <Card time={seconds+1==60?'00':seconds+1<10?`0${seconds+1}`:`${seconds+1}`} nextTime={seconds<10?`0${seconds}`:`${seconds}`} type={'Segs'} />
        </CountDownWrapper>
    );

}