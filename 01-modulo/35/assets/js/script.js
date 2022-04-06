function calculadoraImac() {
    // new Date().toLocaleString("pt-BR", {timeZone: "America/Cuiaba"})

    let form = document.querySelector(".calc")
    // let resulado = form.querySelector("resultado")

    let entrada1 = form.querySelector(".entrada1")
    let saida1 = form.querySelector(".saida1")

    let entrada2 = form.querySelector(".entrada2")
    let saida2 = form.querySelector(".saida1")

    function calcularIntervalo(entrada, saida) {
        let entrad = new Date("2022-01-20:" + entrada.value)
        let said = new Date("2022-01-20:" + saida.value)
        if (said.value < entrad.value) {
            console.log("Invalido")
            return `Dados invalidos`
        } else if (said.value >= entrad.value) {
            let resulado = new Date((said.getTime() - entrad.getTime()) + 14400000)
            console.log(resulado)
            return `Horas trabalhada: ${resulado.getHours()}:${resulado.getMinutes()}`
        }
    }

    function adicionarResultado(mgs) {
        const p = document.createElement("p")
        p.classList.add("nomeclasse")
        p.innerHTML = mgs
        form.appendChild(p)
    }

    function executarCalc(evento) {
        evento.preventDefault()

        adicionarResultado(calcularIntervalo(entrada1, saida1))
        adicionarResultado(calcularIntervalo(entrada2, saida2))
        // resulado.innerHTML += `<p> Hora trabalhadas 1º${calcularIntervalo(entrada1, saida1)}</p>`
        // resulado.innerHTML += `<p> Hora trabalhadas 2º${calcularIntervalo(entrada2, saida2)}</p>`
        // console.log(calcularIntervalo(entrada1, saida1))
        // console.log(calcularIntervalo(entrada2, saida2))
    }

    form.addEventListener("submit", executarCalc)

}

calculadoraImac()