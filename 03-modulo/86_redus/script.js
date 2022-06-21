// const numeros = [0,1,2,3,4,5,6,7,8,9,10,11,12,13]

// const total = numeros.reduce(function (acumulador, valor, indice, array){
//     if(valor % 2 === 0){
//         acumulador.push(valor)
//     }
//     // console.log(acumulador, valor)
//     return acumulador
// },[])



// console.log(total)


const pessoas = [
    {nome: "Fabio", idade : 33},
    {nome: "Elizete", idade : 26},
    {nome: "Fantasma", idade : 26},
    {nome: "Sansa", idade : 18},
    {nome: "Sansa", idade : 42}
]

const maisVelha = pessoas.reduce(function(acumulador, valor){
    // console.log(acumulador, valor)
    if(acumulador.idade > valor.idade){
        return acumulador
    }
    return valor
},0)
console.log(maisVelha)