import { useState } from "react"

export default function formulario(){
    
    const [text,setText]=useState("test")

    const altera = () => setText(text + "!")

    const change = e => setText(e.target.value)

    return(
        <div>
            <input type="text" value = {text} onChange = {change} />
            <button onClick = {altera} > altera</button>
        </div>
    )
}