import listaProdutos from "../../data/listaProdutos"

export default function repeticaoclass() {
    const comBorda = {
        border :"1px solid #000",
    }
    return (
        <div> 
            <table>
                <thead>
                    <th>codigo</th>
                    <th>nome</th>
                    <th>preço</th>
                </thead>
                <tbody> {renderizarLinhas()} </tbody>
            </table>
        </div>
    )

    function renderizarLinhas(){
        return (
            listaProdutos.map(produto => {
                return (
                    <tr key = {produto.id}> 
                        <td style = {comBorda} >{produto.id} </td>
                        <td style = {comBorda} >{produto.nome}</td>
                        <td style = {comBorda} >{produto.preco}</td>
                    </tr>
                )
            })
        )
    }

}