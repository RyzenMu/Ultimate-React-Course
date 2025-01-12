import {useState} from "react";



export default function DC(){
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    let date = new Date();
    date.setDate(date.getDate() + count);

    // handle inputs
    function handleInputRange(event){
        setStep(step => Number(event.target.value));
    }

    function handleInputCount(event){
        setCount(count => Number(event.target.value))
    }


    // inc and dec
    function inc(){
        setCount(count => count + step);
    }

    function dec(){
        setCount(count => count - step);
    }

    return (
        <>
            /*comment*/
            <input type='range' value={step} onChange={handleInputRange} max={10}/> {step}
            <br/>
            <br/>
            <button onClick={dec}>-</button>
            <input type='number' value={count} onChange={handleInputCount}/>
            <button onClick={inc} >+</button>
            <br/>
            <br/>
            <div>{date.toLocaleString()}</div>
            <br/>
            <br/>
            <button>Reset</button>
        </>
    )
}