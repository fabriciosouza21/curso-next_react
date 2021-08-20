export default function If (props){
    if (props.par){
        return props.children
    }
    return null
}