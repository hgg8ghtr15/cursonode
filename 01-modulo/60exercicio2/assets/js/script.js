function geral() {
    const form = document.querySelector(".formConteudo")

    const largura = document.querySelector(".valor1")
    const autura = document.querySelector(".valor2")

    const resultado = document.querySelector(".resultado")

    function analisaValore(largura, autura) {
        largura = Number(largura)
        autura = Number(autura)

        if (largura > autura) {
            console.log(largura)
            return `Paisagem`
        }else if (autura > largura) {
            console.log(autura)
            return `Retrato`
        }else if (autura === largura) {
            return `Retrato`
        }
    }

    function imprimirResultado(msg) {
        resultado.innerText = msg
    }

    function enviar(event) {
        event.preventDefault()
        imprimirResultado(analisaValore(largura.value, autura.value))
    }

    form.addEventListener("submit", enviar)

}

geral()