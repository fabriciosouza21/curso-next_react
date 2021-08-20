import { useState } from "react"

export default function contador(){
    const [numero,setNumero] = useState(0)
    
    const dec = () =>setNumero(numero-1)
    const inc = () =>setNumero(numero+1)
    return (
        <div>
            <h1>Contador</h1>
            <div> valor : {numero} </div>
            <button onClick = {dec} >-</button>
            <button onClick = {inc}>+</button>
            
        </div>
    )
}