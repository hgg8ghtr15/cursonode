function Conta (agencia, conta, saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        this.versaSaldo()
    }
    // console.log("S")
    this.saldo -= valor
    this.versaSaldo()
}
Conta.prototype.depositar = function(valor){
    // console.log("D")
    this.saldo += valor
    this.versaSaldo()
}
Conta.prototype.versaSaldo = function(){
    console.log(this.saldo)
}

function ContaCorrente (agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor){
    if(this.saldo + this.limite < valor){
        this.versaSaldo()
    }
    // console.log("S")
    this.saldo -= valor
    this.versaSaldo()
}



const conta1 = new Conta("Ag:775", "Co:338", 0)
const contaCorrente = new Conta("Ag:555", "Co:333", 0,500)

contaCorrente.depositar(100)
contaCorrente.sacar(400)

console.log(conta1)
console.log(contaCorrente)

// conta1.depositar(100)
// conta1.sacar(50)
// conta1.versaSaldo()