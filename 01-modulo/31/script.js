
// Função classica com retorno
function calcularMetros(valorA, valorB){
    let total = valorA * valorB
    return total
}
let total = calcularMetros(10, 20)
console.log(total)


// Função Anonima
const calculoMetros2 = function (valorA, valorB) {
    return valorA * valorB
}
console.log(calculoMetros2(10, 20))


//Função Arroy

let calculoMetros3 =  (valorA, valorB) =>{
    return valorA * valorB
}
console.log(calculoMetros3(10, 20))