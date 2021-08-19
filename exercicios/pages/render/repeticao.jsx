export default function repeticao(){
    const aprovados = [
        "joao",
        "maria",
        "ana",
        "pedro",
        "renata",
        "tor",
        "nina"
    ]

    return (
       <ul>{renderizarLista()}</ul>
    )
    function renderizarLista(){
        return aprovados.map(function (nome,i){
            return <li key = {i} > {nome}  </li>
        })
    }
}

