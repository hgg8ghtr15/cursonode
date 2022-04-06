function geral() {
    const form = document.querySelector(".formConteudo")

    const valor1 = document.querySelector(".valor1")
    const valor2 = document.querySelector(".valor2")

    const resultado = document.querySelector(".resultado")

    function analisaValore(valor1, valor2) {
        valor1 = Number(valor1)
        valor2 = Number(valor2)

        if (valor1 > valor2) {
            console.log(valor1)
            return `o maior numero ${valor1}`
        }else if (valor2 > valor1) {
            console.log(valor2)
            return `o maior numero ${valor2}`
        }else if (valor2 === valor1) {
            return `Os Numero são iguais`
        }
    }

    function imprimirResultado(msg) {
        resultado.innerText = msg
    }


    function enviar(event) {
        event.preventDefault()
        imprimirResultado(analisaValore(valor1.value, valor2.value))
    }

    form.addEventListener("submit", enviar)

}

geral()