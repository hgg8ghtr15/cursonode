
const pessoa1 = {
    nome:"fabio lucas marconi",
    sexo: "M",
    idade:32,

    falar(){
        console.log(`Ola ${this.nome}`)
    },

    aniversario(){
        this.idade++
    }
}
console.log(pessoa1.falar())
pessoa1.aniversario()
console.log(pessoa1)


function fabricaDeFuncoes (nome, sexo, idade){
    return{
        nome,
        sexo,
        idade
    } 
}

let pessoa2 = fabricaDeFuncoes("Fantasma", "m", 5)

console.log(pessoa2)