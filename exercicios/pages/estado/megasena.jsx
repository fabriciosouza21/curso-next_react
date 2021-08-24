import { useEffect, useState } from "react";
import NumeroDisplay from "../../components/NumeroDisplay";
import { mega } from "../../funcoes/mega"

export default function megasena() {
    const [numeros, setNumeros] = useState([])
    const [qtde, setQtde] = useState(6)

    useEffect(() => setNumeros(mega(+qtde)),[])

    function renderizarNumeros() {
        return numeros.map(numero => <NumeroDisplay key={numero} numero={numero} />)
    }

    return (

        <div style = {{
            display : "flex",
            flexDirection : "column",
            justifyContent: "center",
            alignItems : "center"
        }}>
            <h1>Mega Sena</h1>
            <div style = {{
                display: "flex", 
                flexWrap: "wrap"
                }}>
                    {renderizarNumeros()}
                    </div>
            
            <div>
                <input type="number" min = {6} max = {20} value = {qtde} 
                onChange = {e => setQtde(e.target.value)}  />
                <button onClick = {() => setNumeros(mega(+qtde))} >
                    Gerar
                </button>
            </div>
        </div>
    )
}