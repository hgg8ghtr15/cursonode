// function geral(){


//     function addSoma(valor){
//         const inputCaluladora = document.querySelector(".inputCaluladora")
//         inputCaluladora.value += valor   
//     }
//     function addLimpa(){
//         const inputCaluladora = document.querySelector(".inputCaluladora")
//         inputCaluladora.value = ""    
//     }
//     function dell(){
//         const inputCaluladora = document.querySelector(".inputCaluladora")
//         console.log("Delete")
//     }
//     function soma(){
//         const inputCaluladora = document.querySelector(".inputCaluladora")
//         console.log("Soma")
//     }

//     document.addEventListener("click", function(event){
//         const e = event.target;
//         console.log(e.value);
//         if (e.classList.contains("add_input")){
//             addSoma(e.value)
//         }else if(e.classList.contains("dell")){
//             dell()
//         }else if(e.classList.contains("C")){
//             addLimpa()
//         }else if(e.classList.contains("soma")){
//             soma()
//         }

//     })



// }

// geral()

// function criarCalculadora(){
//     return {
//         // Atributos
//         inputCaluladora: document.querySelector(".inputCaluladora"),

//         iniciar(){
//             this.cliqueBotao()
//             this.precionarEnter()
//         },
//         //metodos

//         precionarEnter(){
//             this.inputCaluladora.addEventListener('keyup', e =>{
//                 console.log(e)
//                 if(e.key === "Enter"){
//                     this.soma()
//                 }
//             })
//         },

//         cliqueBotao(){
//             document.addEventListener("click", function(event){
//                 const e = event.target;
//                 // console.log(e.value);
//                 if (e.classList.contains("add_input")){
//                     this.addSoma(e.value)
//                 }else if(e.classList.contains("dell")){
//                     this.dell()
//                 }else if(e.classList.contains("C")){
//                     this.addLimpa()
//                 }else if(e.classList.contains("soma")){
//                     this.soma()
//                 }
//             }.bind(this))
//         },

//         addSoma(valor){
//             this.inputCaluladora.value += valor
//         },

//         dell(){
//             console.log("Teste")
//             this.inputCaluladora.value = this.inputCaluladora.value.slice(0, -1)
//         },

//         addLimpa(){
//             this.inputCaluladora.value = ""
//         },

//         soma(){
//             let display = this.inputCaluladora.value
//             let resultado = 0
//             try{
//                 resultado = eval(display)
//                 if (!resultado){
//                     alert("Essa operação não é permitida.")
//                 }else{
//                     this.inputCaluladora.value = resultado
//                 }
//             }catch(error){
//                 alert("Essa operação não é permitida.")
//             }
//         },
//     }

// }
// const calculadora = criarCalculadora()
// calculadora.iniciar()


function CalculadoraNova() {
    this.inputCaluladora = document.querySelector(".inputCaluladora")

    this.iniciar = () => {
        // alert("Calculadora")
        this.botao()
        this.precionarBotao()
    }

    this.botao = () => {
        document.addEventListener("click", (event) => {
            this.realizaconta(event)
        })
    }

    this.precionarBotao = () => {
        document.addEventListener("keypress", (event)=>{
            if(event.key === "Enter"){
                this.soma()
            }
        })
    }

    this.realizaconta = (event) => {
        const e = event.target
        console.log(event.target.value)
        if (e.classList.contains("add_input")) {
            this.addDisplay(e.value)
        } else if (e.classList.contains("dell")) {
            this.dell()
        } else if (e.classList.contains("C")) {
            this.Limpa()
        } else if (e.classList.contains("soma")) {
            this.soma()
        }
    }

    this.addDisplay = (valor) => {
        this.inputCaluladora.value += valor
        this.inputCaluladora.focus()
    }

    this.Limpa = () => {
        this.inputCaluladora.value = ""
    }

    this.dell = () => {
        this.inputCaluladora.value = this.inputCaluladora.value.slice(0, -1)
    }

    this.soma = () => {
        let display = this.inputCaluladora.value
        let resultado = 0
        try {
            resultado = eval(display)
            if (!resultado) {
                alert("Essa operação não é permitida.")
            } else {
                this.inputCaluladora.value = resultado
            }
        } catch (error) {
            alert("Essa operação não é permitida.")
        }
    }

}

const calc1 = new CalculadoraNova()
calc1.iniciar()
