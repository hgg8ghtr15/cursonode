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

function criarCalculadora(){
    return {
        // Atributos
        inputCaluladora: document.querySelector(".inputCaluladora"),

        iniciar(){
            this.cliqueBotao()
            this.precionarEnter()
        },
        //metodos

        precionarEnter(){
            this.inputCaluladora.addEventListener('keyup', e =>{
                console.log(e)
                if(e.key === "Enter"){
                    this.soma()
                }
            })
        },

        cliqueBotao(){
            document.addEventListener("click", function(event){
                const e = event.target;
                // console.log(e.value);
                if (e.classList.contains("add_input")){
                    this.addSoma(e.value)
                }else if(e.classList.contains("dell")){
                    this.dell()
                }else if(e.classList.contains("C")){
                    this.addLimpa()
                }else if(e.classList.contains("soma")){
                    this.soma()
                }
            }.bind(this))
        },

        addSoma(valor){
            this.inputCaluladora.value += valor
        },

        dell(){
            console.log("Teste")
            this.inputCaluladora.value = this.inputCaluladora.value.slice(0, -1)
        },

        addLimpa(){
            this.inputCaluladora.value = ""
        },

        soma(){
            let display = this.inputCaluladora.value
            let resultado = 0
            try{
                resultado = eval(display)
                if (!resultado){
                    alert("Essa operação não é permitida.")
                }else{
                    this.inputCaluladora.value = resultado
                }
            }catch(error){
                alert("Essa operação não é permitida.")
            }
        },
    }

}
const calculadora = criarCalculadora()
calculadora.iniciar()
