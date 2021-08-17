
export default function Lista(){
    return (
            <div>
            <h1>{gerarLista()}</h1>
            </div>
    )
}

function gerarLista(tamanho = 10){
    const lista = []
    for (let i = 1; i <= tamanho; i++) {
        lista.push( <span>{i},</span>)

    }
    return lista 
}
