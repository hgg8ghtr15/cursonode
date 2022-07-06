//factory function
function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Fabio', "Lucas")

console.log(p1.nomeCompleto)