import Lista from "../../components/Lista";
import Item from "../../components/Item"

export default function children(){
    return (<div>
        <Lista>
            <Item conteudo = "#01"> </Item>
            <Item conteudo = "#02"> </Item>
            <Item conteudo = "#03"> </Item>
            <Item conteudo = "#04"> </Item>
            <Item conteudo = "#05"> </Item>
        </Lista>
    </div>)
}