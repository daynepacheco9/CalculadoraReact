
import { useState } from "react"
import {Button, ButtonOperation, CalculadoraContainer, Content, Numbers, Operations, Teclas, Visor} from "./styles" 

export default function Calculadora() {
    const [result, setResult] = useState(0);
    const [numA,setNumA] = useState("");
    const [numB,setNumB] = useState("");
    const [ordem, setOrdem] = useState(false);
    const [div,setDiv] = useState(false);
    const [soma,setSoma] = useState(false);
    const [sub,setSub] = useState(false);
    const [mult,setMult] = useState(false);
    const [reset,setReset] =useState(false);


    function Resultado() {
        if (div) {
            if (numB === "0") {
                return;
            }
            setResult(Number(numA) / Number(numB));
            setDiv(false)
            setNumA(result)
            setNumB("")
    
        }
        if (soma ) {
            console.log("soma1")
            console.log(numA)
            console.log(numB)
            setResult(Number(numA) + Number(numB));
            setSoma(false)
            setNumA(result)
            setNumB("")
        }
        if (sub) {
            setResult(Number(numA) - Number(numB));
            setSub(false)
            setNumA(result);
            setNumB("")
        }
        if (mult) {
            setResult(Number(numA) * Number(numB));
            setMult(false)
            setNumA(result);
            setNumB("")
        }
    }   

    function Reset() {
        console.log("reset")
        setResult(0)
        setNumA(0)
        setNumB(0)
        setSoma(false) 
        setDiv(false)
        setSub(false)
        setMult(false)
        setOrdem(false)
        setReset(false)
    }


    function Soma() {
        console.log("soma")
        console.log(numA)
        console.log(numB)
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
        <Content>
            <CalculadoraContainer>
                <Visor  >{result}</Visor  >
                <Teclas>
                    <Numbers>
                        <div>
                            <Button onClick={() => !ordem ? setNumA(numA + "0"): setNumB(numB + "0")}>0</Button>
                            <Button onClick={Reset}>AC</Button>
                            <Button onClick={() => Resultado()}>=</Button>
                           
                        </div>
                        <div>
                            
                            <Button onClick={() => !ordem ? setNumA(numA + "1"): setNumB(numB + "1")}>1</Button>
                            <Button onClick={() => !ordem ? setNumA(numA + "2"): setNumB(numB + "2")}>2</Button>
                            <Button onClick={() => !ordem ? setNumA(numA + "3"): setNumB(numB + "3")}>3</Button>
                        </div>
                        <div>
                            <Button onClick={() => !ordem ? setNumA(numA + "4"): setNumB(numB + "4")}>4</Button>
                            <Button onClick={() => !ordem ? setNumA(numA + "5"): setNumB(numB + "5")}>5</Button>
                            <Button onClick={() => !ordem ? setNumA(numA + "6"): setNumB(numB + "6")}>6</Button>
                        </div>
                        <div>
                            <Button onClick={() => !ordem ? setNumA(numA + "7"): setNumB(numB + "7")}>7</Button>
                            <Button onClick={() => !ordem ? setNumA(numA + "8"): setNumB(numB + "8")}>8</Button>
                            <Button onClick={() => !ordem ? setNumA(numA + "9"): setNumB(numB + "9")}>9</Button>
                        </div>
                    </Numbers>
                    <Operations>
                        <ButtonOperation onClick={Div}>%</ButtonOperation>
                        <ButtonOperation onClick={Soma}>+</ButtonOperation>
                        <ButtonOperation onClick={Sub}>-</ButtonOperation>
                        <ButtonOperation onClick={Mult}>X</ButtonOperation>
                    </Operations>
                </Teclas>
            </CalculadoraContainer>
        </Content>
    )
}