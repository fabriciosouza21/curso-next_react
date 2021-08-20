
function mega(qtde = 6, numeros = []){
    if (qtde < 6 && qtde > 60){
        throw "quatidade invalida"
    }
    
    if (numeros.length === qtde){
        return numeros
    }

    const numeroAleatorio = parseInt(Math.random() * 60) + 1
    if(!numeros.includes(numeroAleatorio)){
        numeros.push(numeroAleatorio)
        return mega(qtde, [...numeros])
    }
    else{
    return mega(qtde, numeros)
    }
}

console.log(mega())