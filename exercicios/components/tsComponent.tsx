
interface PessoaPorps{
    name : string
    idade ? : number
}

export default function tsComponent (props: PessoaPorps){
    return (
            <div style = {{ display : "flex",
                flexDirection: "column" }} >
                <h1>Nome : {props.name}</h1>
                <h1> Idade : {props.idade ?? "idade não informada"}</h1>
            </div>
    )
}