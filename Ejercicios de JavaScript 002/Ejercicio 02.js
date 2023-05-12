// Ejercicio 02
function cuadratica(a, b, c){
    let uno = -b
    console.log(uno)
    let dos = Math.sqrt((b ** 2) - (4 * a * c))
    console.log(dos)
    let tres = 2 * a
    console.log(tres)
    return uno - dos / tres
}

console.log(cuadratica(2, 8, 3))
