// Ejercicio 01
function recuento(palabra){
    let repe = {}
    let pal = palabra.toLowerCase()
    for (let i = 0; i < palabra.length; i++){
        let caracter = pal[i]
        if (repe[caracter]){
            repe[caracter] += 1
        }else{
            repe[caracter] = 1
        }
    }
    return repe
}

console.log(recuento("aaArrxxxluqulq"))
