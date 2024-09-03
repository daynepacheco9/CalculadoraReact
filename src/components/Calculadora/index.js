
import { useState } from "react"

export default function Calculadora() {
    const [result, setResult] = useState(0);
    const [numA,setNumA] = useState("");
    const [numB,setNumB] = useState("");
    const [ordem, setOrdem] = useState(false);
    const [div,setDiv] = useState(false);
    const [soma,setSoma] = useState(false);
    const [sub,setSub] = useState(false);
    const [mult,setMult] = useState(false);


    function Resultado() {
        if (div) {
            if (numB === "0") {
                return;
            }
            setResult(parseInt(numA) / parseInt(numB));
            setDiv(false)
            setNumA(result);
        }
        if (soma ) {
            setResult(Number(numA) + Number(numB));
            console.log(numB);
            setSoma(false)
            setNumA(result);
        }
        if (sub) {
            setResult(Number(numA) - Number(numB));
            console.log(numB);
            setSub(false)
            setNumA(result);
        }
        if (mult) {
            setResult(numA * numB);
            setMult(false)
            console.log( numA);
            console.log(typeof numA, typeof numB);
            setNumA(result);
        }
    }

    function Soma() {
        setSoma(true) 
        setDiv(false)
        setSub(false)
        setMult(false)
        setOrdem(true)
    }
    function Div() {
        setSoma(false) 
        setDiv(true)
        setSub(false)
        setMult(false)
        setOrdem(true)
    }
    function Sub() {
        setSoma(false) 
        setDiv(false)
        setSub(true)
        setMult(false)
        setOrdem(true)
    }
    function Mult() {
        setSoma(false) 
        setDiv(false)
        setSub(false)
        setMult(true)
        setOrdem(true)
    }
    return(
        <>
            <div>
                <div>
                    <button onClick={() => !ordem ? setNumA(numA + "1"): setNumB(numB + "1")}>1</button>
                    <button onClick={() => !ordem ? setNumA(numA + "2"): setNumB(numB + "2")}>2</button>
                    <button onClick={() => !ordem ? setNumA(numA + "3"): setNumB(numB + "3")}>3</button>
                </div>
                <div>
                    <button onClick={() => !ordem ? setNumA(numA + "4"): setNumB(numB + "4")}>4</button>
                    <button onClick={() => !ordem ? setNumA(numA + "5"): setNumB(numB + "5")}>5</button>
                    <button onClick={() => !ordem ? setNumA(numA + "6"): setNumB(numB + "6")}>6</button>
                </div>
                <div>
                    <button onClick={() => !ordem ? setNumA(numA + "7"): setNumB(numB + "7")}>7</button>
                    <button onClick={() => !ordem ? setNumA(numA + "8"): setNumB(numB + "8")}>8</button>
                    <button onClick={() => !ordem ? setNumA(numA + "9"): setNumB(numB + "9")}>9</button>
                </div>
            </div>
            <div>
                <button onClick={Soma}>+</button>
                <button onClick={Sub}>-</button>
                <button onClick={Mult}>X</button>
                <button onClick={Div}>%</button>
                <button onClick={() => Resultado()}>=</button>
            </div>
            <p>{result}</p>
        </>
    )
}