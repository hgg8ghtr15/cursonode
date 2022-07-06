function app(){
    const form = document.querySelector(".formulario")
    const inputCpf = document.querySelector(".inputCpf")


    function calulaPrimeiroDigito(cpf){
        let valor = 0
        let digito = 10
        let cpf2 = cpf.slice(0,-2)
        cpf2.forEach((element) => {
            valor += (element * digito)
            // console.log(`${element} * ${digito} = ${valor}`)
            digito -= 1
        });
        valor = 11 - (valor % 11)
        if (valor > 9){
            return 0
        }else{
            return valor
        }
    }

    function calulaSegundoDigito(cpf){
        let valor = 0
        let digito = 11
        let cpf2 = cpf.slice(0,-1)
        cpf2.forEach((element) => {
            valor += (element * digito)
            // console.log(`${element} * ${digito} = ${valor}`)
            digito -= 1
        });
        valor = 11 - (valor % 11)
        if (valor > 9){
            return 0
        }else{
            return valor
        }
    }

    function limpaCpf(cpf){
        let cpfLimpo = cpf.replace(/\D+/g,"")
        let cpfArray = Array.from(cpfLimpo)
        return cpfArray
    }


    function validoCpf(){
        const cpfArray = limpaCpf(inputCpf.value)
        const primeirDigito = calulaPrimeiroDigito(cpfArray)
        const segundoDigito = calulaSegundoDigito(cpfArray)
        if (Number(cpfArray[9]) === primeirDigito && Number(cpfArray[10]) === segundoDigito){
            return true    
        }else{
            return false
        }
    }


    function enviarFormulario(evento){
        evento.preventDefault()
        if (!validoCpf()){
            alert("CPF Invalido")
        }

    }

    form.addEventListener("submit", enviarFormulario)
}

app()