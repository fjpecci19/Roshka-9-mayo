// Ejercicio 02 - Día 2 - Roshka
let lista = []
for (let i = 0; i < 100; i++){
    lista.push(Math.floor(Math.random() * 61) - 30)   
}

console.log(lista)

let rep = {}
let maxrep = 0
let elemento = null
for (let i = 0; i < lista.length; i++){
    let num = lista[i]
    rep[num] = (rep[num] || 0) + 1
    if (rep[num] > maxrep){
        maxrep = rep[num]
        elemento = num
    }
}

console.log("El elemento que se repite más veces es: " + elemento)

let numeros = []
for (let i = -30; i <= 30; i++){
    numeros.push(i)
}
let nopresentes = numeros.filter(num => !numeros.includes(num))
console.log("Los números que no están presentes son: " + nopresentes)
