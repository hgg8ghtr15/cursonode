//função construtora -> molde (classe)

function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){ return `${this.nome} ${this.sobrenome}`} 
//instanciação
const pessoa1 = new Pessoa('Fabio', 'Lucas')
const pessoa2 = new Pessoa('Elizete', 'Venson')
const data = new Date()

console.dir(pessoa1)
console.dir(pessoa2)
console.dir(data)

console.log(pessoa1.nomeCompleto())