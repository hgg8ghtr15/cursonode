function Pessoa(nome, sobrenome){
    // Privadas.
    const id = 1234
    const minhaFuncaoInterna = e =>{
        console.log("TEste")
    }

    // Publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = e =>{
        console.log("metodo")
    }

    minhaFuncaoInterna();
}

const p1 = new Pessoa("Fabio", "Lucas")

p1.metodo()