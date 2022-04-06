// Factory functions (função fabrica)
function criaPessoa(nome, sobrenome, autura, peso){
    return {
        nome,
        sobrenome,
        altura:autura,
        peso:peso,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        fala:function(assunto){
            return `${nome}, ${sobrenome}, Bem vindo, ${assunto}`
        },
        
        fala2(){
            return `${this.nome}, ${sobrenome}, Bem vindo, ${assunto}`
        },
        //getter
        get imc(){
            const indice = this.altura / (this.peso ** 2)
            return indice
        },

        set nomeCompleto2(valor){
            console.log(valor)
        }
        
    }
}

const p1 = criaPessoa("Fabio", "lucas", 1.69,80)
console.log(p1.fala("teste"))
console.log(p1.imc)
console.log(p1.nomeCompleto2 = "Marconi")

// Constructor function (função contrutora)