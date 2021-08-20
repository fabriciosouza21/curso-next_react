export default function SomentePar(props){
    const par = props.numero % 2 === 0
    return (<div>
        {par ? 
        <span>{props.numero}</span> : 
        null}
    </div>
         )
}