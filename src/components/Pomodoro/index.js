import { useEffect, useState } from "react";
import "./Pomodoro.css";


const Pomodoro = (props) => {

    const workTime = props.workTime;
    const restTime = props.restTime;

    const [minute, setminute] = useState(workTime);
    const [second, setsecond] = useState(0);
    const [isWorking, setIsWorking] = useState(true);
    const [status, setStatus] = useState(false);


    useEffect(() => {
        status && setTimeout(() => {
            if (second > 0) setsecond(second - 1);
            else {
                if (minute != 0) setsecond(59);
                if (minute > 0) setminute(minute - 1)
                else {
                    if (isWorking) {
                        alert("Tanafus");
                        setminute(restTime)
                    }
                    else {
                        alert("Ishlash voxti");
                        setminute(workTime)
                    }
                    setIsWorking(!isWorking)
                }
            };
        }, 100)
    }, [second, isWorking, status])

    //      Qisqartirilgan varyanti;   
    const setZero = (n) => (n < 10 && "0" || "") + n;

    //      Sodda varyanti;
    // const setZero = (n) => {
    //     if (n < 10) n = "0" + n;
    //     return n;
    // }

    return status ?
            <h1 className="text-center mt-5 display-1 fw-bold">{setZero(minute)}:{setZero(second)}</h1> :
            <button className="btn btn-dark text-center" onClick={() => setStatus(true)}>Start</button>
}

export default Pomodoro;