// Ejercicio 03 - Día 3 - Roshka
function Palindrome(palabra){
    let aux = palabra.split("")
    let aux2 = aux.reverse()
    let palabralreves = aux2.join("")
    console.log(palabra)
    console.log(palabralreves)

    let c = 0
    for(let i = 0; i < palabra.length; i++){
        if (palabralreves[i] == palabra[i]){
            c += 1
        }
    }
    console.log(c)

    if (c == palabra.length){
        return "La palabra es palíndrome"
    }else{
        return"La palabra no es palíndrome"
    }
}

console.log(Palindrome("MIMIM"))
