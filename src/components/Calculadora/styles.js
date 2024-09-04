const { default: styled } = require("styled-components");

const Button = styled.button`
    width:  5.7vw;
    height:8vh;
    margin: 5px;
    border-radius: 50px;
    font-size: 30px;
`;


const ButtonOperation = styled(Button)`
    background-color: orange;
`

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

`

const CalculadoraContainer = styled.div`
    width: 25vw;
    height: 42vh;
    flex-direction: column;
    background-color: black;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    font-size: 20px;
`

const Teclas = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    padding-top: 10px;
` 

const Numbers = styled.div`
    display: flex;
    flex-direction: column;
`
const Operations = styled.div`
    display: flex;
    flex-direction: column;
`
const Visor = styled.p`
    margin: 0;
    padding: 10px;
    background-color: darkgrey;
    border-radius: 20px;
    font-size: 30px;
`

export {Button,ButtonOperation, CalculadoraContainer,Visor, Content,Teclas, Numbers, Operations}