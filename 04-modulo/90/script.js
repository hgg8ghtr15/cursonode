// defineProperty      defineProperties

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostra chave
        value: estoque, // recebe valor do construtor
        writable:false, //pode alterar
        configurable: false, // pode reconfigurar chave
    })


    Object.defineProperties(this, {
        nome:{
            enumerable: true, // mostra chave
            value: nome, // recebe valor do construtor
            writable:false, //pode alterar
            configurable: false, // pode reconfigurar chave
        },
        preco:{
            enumerable: false, // mostra chave
            value: preco, // recebe valor do construtor
            writable:false, //pode alterar
            configurable: false, // pode reconfigurar chave
        }
    })

}

const p1 = new Produto('Notebook', 20, 5)

p1.estoque = 500
console.log(p1.estoque)
delete p1.estoque
console.log(p1.estoque)

console.log(Object.keys(p1))

console.log("-----")

for (let chave in p1) {
    console.log(chave)
}



