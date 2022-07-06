function Pessoa (nome, sobrenome,idade){
    this.nome = nome
    this.sobrenome = sobrenome
    let idadePrivada = idade

    Object.defineProperty(this, 'idade',{
        get: function(valor){
            return idadePrivada
        },
        set: function(valor){
            idadePrivada = valor
        }
    })


}
//copia com spred
const pessoa1 = new Pessoa('Elizete', 'Venson', 20)
const pessoa2 = {...pessoa1, sexo: "m"}

// console.log(Object.keys(pessoa1))
// pessoa1.idade = 33
pessoa1.nome = "Fabio"
console.log(pessoa1)
console.log(pessoa2)

//copia com assign
const pessoaFisica = Object.assign({}, pessoa1, {altura: 1.70})
console.log(pessoaFisica)

// Mostra as chaves
console.log(Object.keys(pessoaFisica))

//bloqueia edição do object
Object.freeze(pessoaFisica)
pessoaFisica.nome = "Marconi"
console.log(pessoaFisica)

//mostra as propriedade do object defineProperty
console.log(Object.getOwnPropertyDescriptor(pessoa1, 'nome'))
Object.defineProperty(pessoa1, 'nome',{
    writable:false
})
pessoa1.nome = "Marconi"
console.log(pessoa1)

// mostra os valores
console.log(Object.values(pessoa1))
console.log(Object.entries(pessoa1))

//destructor
let {nome, sobrenome} = pessoa1
console.log(nome, sobrenome)