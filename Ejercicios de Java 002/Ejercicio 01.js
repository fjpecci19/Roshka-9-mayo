// Ejercicio 01 - Día 2 - Roshka
let lista = []
for (let i = 0; i < 10; i++){
  lista.push(Math.floor(Math.random() * 11) - 5)
}

console.log(lista)

let max = Math.max(...lista)
console.log("El mayor elemento del array es: " + max)

