function calculadoraImac(){
    
    const form = document.querySelector(".formulario")

    const verificar = (valor) =>{
        if (valor == 10){
            throw new Error("Valor não pode ser 10")
            // throw("Valor não pode ser 10")
        }
    }

    const verificar2 = () => {
        try {
            verificar(10)

        } catch (erro) {
            console.log(erro)
        }finally{
            console.log("Finalizado")
        }
    }



    const somar = (event) =>{
        event.preventDefault()

        try {
            verificar(10)

        } catch (erro) {
            console.log(erro)
        }

        verificar2(10)
    }

    form.addEventListener("submit", somar)
}

calculadoraImac()

