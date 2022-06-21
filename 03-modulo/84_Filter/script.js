const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]

function callbackFilter(valor, indice, arrays) {
    // console.log(valor, indice)
    return (valor > 10);
}

const numerosFiltrados = numeros.filter(callbackFilter)
console.log(numerosFiltrados)

const pessoas = [
    {nome: "Fabio", idade : 33},
    {nome: "Lucas", idade : 29},
    {nome: "Marconi", idade : 18},
    {nome: "Sansa", idade : 9},
    {nome: "Fantasma", idade : 8},
    {nome: "Elizete", idade : 22},
]

function pessoasFilter(valor, indice, arrays){
    return valor.nome.length === 5
}

const pessoasMaisque6 = pessoas.filter(obj => obj.nome.length >= 6)
const pessoasMaisCiquenta = pessoas.filter(obj => obj.idade > 50)
const pessoasUltimoCaracter = pessoas.filter(obj => obj.nome.endsWith("a") )

// const nomes = pessoas.filter(pessoasFilter)
console.log(pessoasMaisque6)
console.log(pessoasMaisCiquenta)
console.log(pessoasUltimoCaracter)
