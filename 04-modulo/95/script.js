function Produto (nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia
}

Produto.prototype.desconto = function(quantia){
    this.preco += quantia
}

function Camiseta (nome, preco, cor) {
    Produto.call(this, nome, preco )
    this.cor = cor
}
function Caneca (nome, preco, estoque) {
    Produto.call(this, nome, preco)

    Object.defineProperty(this, "estoque",{
        enumerable: true,
        // writable:false,
        configurable: false,
        get: function(){
            return estoque
        },
        set: function(valor){
            if(typeof(valor) != "number"){
                return estoque
            }
            return valor
        }
    })

}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.construtor = Camiseta

const camisa1 = new Camiseta("regata", 10, "verde")
const produto1 = new Produto("produto", 10)
const caneca1 = new Caneca("caneca", 10, 50)

// caneca1.estoque = 10

// console.log(camisa1)

camisa1.aumento(15)
console.log(camisa1)
console.log(produto1)
console.log(camisa1)