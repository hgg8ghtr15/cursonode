const numeros = [1, 2, 3, 4, 5, 80,100,101,102,103,104,70,77,66,37]

const numerosPares = numeros.filter(function (valor) { 
    return valor % 2 === 0
}).map(function (valor) {
    return valor * 2
}).reduce(function (acumulador, valor){
    return acumulador + valor
})

console.log(numerosPares)


const listaPares = numeros
    .filter(valor => { return valor % 2 === 0})
    .map(valor => {return valor * 2})
    .reduce((acumulador, valor) => { return acumulador + valor})

console.log(listaPares)