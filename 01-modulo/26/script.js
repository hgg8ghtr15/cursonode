let numero = Number(prompt("Digite um numero!"))

let tituloNumero = document.getElementById("numero_digitado")
let resultados = document.getElementById("resultados")

let texto = `Raiz Quadrada = ${Math.sqrt(numero)} <br/>`

texto += `${numero} é inteiro ${Number.isInteger(numero)} <br/>` 
texto += `${numero} é NaN ${Number.isNaN(numero)} <br/>` 
texto += `${numero} arredonda para baixo ${Math.floor(numero)} <br/>` 
texto += `${numero} arredonda para cima ${Math.ceil(numero)} <br/>` 
texto += `${numero} Com duas casa decimais ${numero.toFixed(2)} <br/>` 

tituloNumero.innerText = numero
resultados.innerHTML = texto 
