
const pessoa = {
    nome: 'Luiz',
    sobrenome :'Otávio'
}
console.log(pessoa['nome'])
console.log(pessoa['sobrenome'])

const chave = 'nome'
console.log(pessoa[chave])


const pessoa1 = new Object()
pessoa1.nome = 'Elizete'
pessoa1.sobrenome = 'Venson'
delete pessoa1.nome
console.log(pessoa1)

pessoa1.falarnome = function(){
    console.log(`${this.sobrenome} Esta falando`)
}

pessoa1.falarnome()



