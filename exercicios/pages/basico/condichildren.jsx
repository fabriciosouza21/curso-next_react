import If from "../../components/If"

export default function condichildren(){
    const number = 4
    return (
        <div>
            <If par = {number % 2 === 0}> 
                <h1>
                    par
                </h1>
            </If>
        </div>
    )
}