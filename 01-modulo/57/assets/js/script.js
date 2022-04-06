function geral (){
    const div_elemento = document.querySelector('.container-calcular')
    const paragrafos = div_elemento.querySelectorAll('p')
    console.log(paragrafos)

    let estilobody = getComputedStyle(document.body)
    let corbody = estilobody.background
    console.log(corbody)

    for (let p of paragrafos){
       p.style.background = corbody
    }

}

geral()