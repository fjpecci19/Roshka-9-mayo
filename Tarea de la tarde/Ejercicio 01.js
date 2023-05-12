// Ejercicio 01
function nextBig(num) {
    const numeros = Array.from(num.toString()).map(Number)

    let i = numeros.length - 2
    while (i >= 0 && numeros[i] >= numeros[i + 1]) {
      i--
    }

    if (i < 0) {
      return null
    }
    
    let j = numeros.length - 1
    while (numeros[j] <= numeros[i]) {
      j--
    }

    if (numeros[i] != numeros[j]){
      [numeros[i], numeros[j]] = [numeros[j], numeros[i]]
    }else{
      return null
    }

    const aux = numeros.splice(i + 1)
    aux.sort((a, b) => a - b)
      
    const siguiente = parseInt([...numeros, ...aux].join(''))
      
    return siguiente
}

console.log(nextBig(2017))
console.log(nextBig(8475))
console.log(nextBig(11))
