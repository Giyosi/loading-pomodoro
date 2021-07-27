import { useEffect, useState } from "react";
import "./Loading.css";


//  1-korinishi
//  function Loading (props) {
//     return <h1>Loading</h1>
//  }


// let arr = [11, 24];
// const a = arr[0];
// const b = arr[1];

// const [c, d] = [123, 4484]; 
// console.log(d);


//   2-korinishi
const Loading = (props) => {

    const [step, setStep] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState("red");

    useEffect(() => {
        console.log("Birirnchi useEffect ishladi");

        if (step >= 30 && step < 70) setBackgroundColor("yellow");
        else if (step >= 70) setBackgroundColor("blue");

        // if (step < 100) setStep(step + 1);
        setTimeout(() => {
            step < 100 && setStep(step + 1)
        }, 100)
    }, [step])

    // useEffect(() => {
    //     if (step >= 30 && step < 70) setBackgroundColor("yellow");
    //     else if (step >= 70) setBackgroundColor("green");
    // }, [backgroundColor, step])

    return <div className="text-center">
        <h1 className="text" style={{color:`${backgroundColor}`}}>{step}%</h1>
        <div className="loadingPanel border-0">
            <div className="loading" style={{ width: `${step}%`, backgroundColor: backgroundColor }}>{step}</div>
        </div>
    </div>
}

export default Loading;