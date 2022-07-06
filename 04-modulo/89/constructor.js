function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //Object.freeze(this)
}

const p1 = new Pessoa('Fabio', "Lucas")
p1.fala = function (){
    console.log("Teste de fala.")
}


console.log(p1.nome)
p1.fala()