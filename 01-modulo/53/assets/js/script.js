const elementos = [
    {tag:"p", text:"Frase 1"},
    {tag:"div", text:"Frase 2"},
    {tag:"footer", text:"Frase 3"},
    {tag:"section", text:"Frase 4"},
];

let container = document.querySelector(".container-calcular")


function criarElemento(tipoElemento){
    console.log(tipoElemento)
    let {tag, text} = tipoElemento
    const elemento = document.createElement(tag)
    // elemento.innerHTML += text
    let textoCriado = document.createTextNode(text)
    elemento.appendChild(textoCriado)
    
    container.appendChild(elemento)
}

for(let i = 0 ; i <= elementos.length ; i++){
    let ele = elementos[i]
    console.log(ele)
    criarElemento(ele)
}


