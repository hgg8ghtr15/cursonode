
let numero1 = Number(window.prompt("Digite o 1º para calcularmos!"))
let numero2 = Number(window.prompt("Digite o 2º para calcularmos!"))
let reusltado 
let tipoCalculo = window.prompt(`Digite um tipo de operação, "*", "/", "+", "-" `)

if(isNaN(numero1) || isNaN(numero2)){
    alert("1º Número não é um numero!")
}else{
    if(tipoCalculo == "*"){
        reusltado = numero1 * numero2
    }if(tipoCalculo == "/"){
        reusltado = numero1 / numero2
    }if(tipoCalculo == "+"){
        reusltado = numero1 + numero2
    }if(tipoCalculo == "-"){
        reusltado = numero1 - numero2
    }else{
        alert(`Não informado tipo de operação.`) 
    }
    if(reusltado){
       alert(`Valor da soma ${reusltado}`) 
    }else{
        alert(`Impossivel calcular!`) 
    }
    
}

