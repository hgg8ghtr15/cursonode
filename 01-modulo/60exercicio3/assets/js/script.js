function geral() {
    const form = document.querySelector(".formConteudo")

    const numero = document.querySelector(".valor1")


    const resultado = document.querySelector(".resultado")

    const analisaNumero = (numero)=>{
        numero = Number(numero)
        if (numero % 3 == 0){
            console.log("Divisivel por 3")
            if(numero % 5 == 0){
                return "FizzBuzz"
            }else{
                return "Fizz"
            }
        }else if(numero % 5 == 0){
            return "Buzz"
        }else{
            return numero
        }
    }

    const imprimeResultado = (msg)=>{
        return resultado.innerText = msg
    }

    function enviar(event) {
        event.preventDefault()       
         
        imprimeResultado(analisaNumero(numero.value))
    }

    form.addEventListener("submit", enviar)

}

geral()