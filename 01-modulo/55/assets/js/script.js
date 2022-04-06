const frutas = ["maça","pera","uva"]
const pessoa = {
    nome:"fabio",
    sobrenome:"Lucas"
}


console.log("----------For classico")
for (var i = 0; i <frutas.length; i++) {
    console.log(frutas[i])
}

console.log("----------for IN - Retona indice ou chave")
for (let index in frutas) {
    console.log(frutas[index])
}
for (let chave in pessoa) {
    console.log(pessoa[chave])
}
console.log("----------For of")
for (let valor of frutas) {
    console.log(valor)
}
console.log("----------For Each")
frutas.forEach(function (valor,indice, arrays) {
    console.log(valor, indice, arrays)
});