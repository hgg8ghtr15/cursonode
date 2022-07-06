function Produto(nome, preço, estoque) {
    this.nome = nome;
    this.preço = preço;

    let estoquePrivado = estoque
    
    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        get: function () {
            return estoquePrivado;
        },
        set: function (valor) {
            if(typeof valor !== 'number'){
                console.log("Error: valor is not a number")
                return 'valor invalido'
            }
            estoquePrivado = valor
        },
        configurable: true
    })
}

const p1 = new Produto('Notebook', 5000, 10)

console.log(p1)
p1.estoque = 'valor que eu quero'
p1.estoque = 50
console.log(p1.estoque)