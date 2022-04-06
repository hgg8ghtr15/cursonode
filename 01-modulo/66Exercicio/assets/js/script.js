const timer = ()=>{
    const btnIniciar = document.querySelector(".iniciar")
    const btnPausar = document.querySelector(".pausar")
    const btnZerar = document.querySelector(".zerar")
    const resultado = document.querySelector(".resultado")
    let contador = 0
    let timer;

    const criaSegundos = (segundos)=>{
        const data = new Date(segundos*1000)
        return data.toLocaleTimeString("pt-br",{timeZone: 'UTC'})
    }

    const iniciaRelogio = ()=>{
        timer = setInterval(function (){
            contador += 1
            resultado.innerHTML = criaSegundos(contador)
        },1000)
    }

    const iniciar = ()=>{
        // event.preventDefault()
        iniciaRelogio()
    }

    const pausar = (event) =>{
        // event.preventDefault()
        clearInterval(timer)
    }
    const zerar = (event) =>{
        // event.preventDefault()
        clearInterval(timer)
        contador = 0
        resultado.innerHTML = criaSegundos(contador)
    }

    // btnPausar.addEventListener("click", pausar)
    // btnZerar.addEventListener("click", zerar)

    document.addEventListener("click", function(event) {
        const el = event.target
        if (el.classList.contains("iniciar")){
            iniciar()
            console.log("iniciar")
        }else if(el.classList.contains("pausar")){
            pausar()
        }else if(el.classList.contains("zerar")){
            zerar()
        }
    })
}

timer()
