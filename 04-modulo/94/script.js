const objA = { chave: 'chave A'}

const objB = { chave: 'chave B'}

const objC = new Object({ chave: 'chave C'})

console.log(objB)
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objA);

console.log(Object.getPrototypeOf(objB))
console.log(objB)
console.log(objC)

function Produto (nome, valor) {
    this.nome = nome
    this.valor = valor
}

Produto.prototype.desconto = function (valor) {
    this.valor = this.valor - (this.valor * (valor / 100 ))
    return this.valor
}
Produto.prototype.aumenta = function (valor) {
    this.valor = this.valor + (this.valor * (valor / 100 ))
    return this.valor
}

const produto1 =  new Produto('Caneca', 150)
console.log(produto1.desconto(10))

const produto2 = { nome: 'notebook', valor:1500}

Object.setPrototypeOf(produto2, Produto.prototype)
console.log(produto2.aumenta(15))

const produto3 = Object.create(Produto.prototype)
produto3.nome = "Desktop"
produto3.valor = 2500

console.log(produto3.desconto(10))

const produto4 = Object.create(Produto.prototype, {
    valor : {
        writable: true,
        configurable: true,
        enumerable: true,
        value : 2500
    },
})

console.log(produto4.desconto(10))