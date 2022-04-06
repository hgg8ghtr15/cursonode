const global = ()=>{

    const addListaTarefa = (tarefa)=>{
        const listaTarefa = document.querySelector(".listaTarefas")
        console.log(listaTarefa)
        listaTarefa.appendChild(tarefa)
    }

    const criarTarfa = (tarefa)=>{
        const li = document.createElement('li');
        li.innerText = `${tarefa} `
        li.classList.add("tarefa")
        li.appendChild(criaButton())
        addListaTarefa(li)
        salvaTarefa()
    }

    const criaButton = ()=>{
        const button = document.createElement("button")
        button.classList.add("buttonExcluir")
        button.innerText = "Excluir"
        return button
    }

    const salvaTarefa = () => {
        const listaTarefas = document.querySelector(".listaTarefas")
        const tarefas = listaTarefas.querySelectorAll("li")
        const listaTarefasTratada = []
        for (const tarefa of tarefas) {
            let tarefaTexto = tarefa.innerText
            tarefaTexto = tarefaTexto.replace("Excluir", "").trim()
            listaTarefasTratada.push(tarefaTexto)
        }
        const tarefasJSON = JSON.stringify(listaTarefasTratada)
        localStorage.setItem('tarefas', tarefasJSON)
    }

    const recuperarTarefa = ()=>{
        const tarefas = localStorage.getItem("tarefas")
        const listaTarefas = JSON.parse(tarefas)
        for (const tarefa of listaTarefas) {
            console.log(tarefa)
            criarTarfa(tarefa)
        }
    }
    recuperarTarefa()

    document.addEventListener("click",function(event){
        const e = event.target
        const tarefa = document.querySelector(".inputTarefa")
        console.log(event)
        if(e.classList.contains("adicionar")){
            criarTarfa(tarefa.value)
            tarefa.value = ""
            tarefa.focus()
        }else if(e.classList.contains("buttonExcluir")){
            console.log(e.parentElement.remove())
            salvaTarefa()
        }
    })

    document.addEventListener("keypress", (event)=>{
        const tarefa = document.querySelector(".inputTarefa")
        if(event.key == "Enter"){
            console.log(event.key)
            criarTarfa(tarefa.value)
            tarefa.value = ""
            tarefa.focus()
        }
    })
}

global()

