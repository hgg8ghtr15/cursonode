const geral = () =>{
    const form = document.querySelector(".formulario")
    const inputTempo = form.querySelector(".inputTempo")
    const resultado = document.querySelector(".resultado")
    const dia = new Date()
    
    const carregarHora = (dia) => {
        // inputTempo.value = `${dia.getHours()}:${dia.getMinutes()}`
        resultado.innerHTML = dia
    }

    const adicionarTempo = (tempo) => {
        let dia2 = new Date()
        carregarHora(dia2.toLocaleTimeString("pt-BR"))
    }

    const enviarResultado = (event) =>{
        event.preventDefault()
        const execucaoSetInterval = setInterval(adicionarTempo,1000)
        
        setTimeout(function(){
            clearInterval(execucaoSetInterval)
        },5000)
    }

    carregarHora(dia)
    form.addEventListener("submit", enviarResultado)
}

geral()
