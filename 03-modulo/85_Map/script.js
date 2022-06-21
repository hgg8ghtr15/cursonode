const numeros = [5,9,8,55,33,54,99,77,59,2,3,18,59,51,8,71,2,13,5,84,8,61]
const pessoas = [
    {nome: "Fabio", idade : 33},
    {nome: "Lucas", idade : 29},
    {nome: "Marconi", idade : 18},
    {nome: "Sansa", idade : 9},
    {nome: "Fantasma", idade : 8},
    {nome: "Elizete", idade : 22},
]


const dobro = numeros.map(function(valor, indice, arrays){
    return valor*2
    }
)
console.log(dobro)

const nomesPessoas = pessoas.map(obj => obj.nome)

const nomesSemNome = pessoas.map(function(obj, indice,){
    const novoObjeto = {nome: obj}
    delete novoObjeto.nome
    return novoObjeto
    // return {idade :obj.idade}
})

const nomesComID = pessoas.map(function(obj, indice,){
    const novoObjeto = {...obj}
    novoObjeto.id = indice
    return novoObjeto
    // return {id: indice, nome: obj.nome, idade: obj.idade}
})

console.log(nomesPessoas)
console.log(nomesSemNome)
console.log(nomesComID)
console.log(pessoas)

