function zeroEsquerda (numero){
    return (
        numero >= 10 ? numero : `0${numero}`
    )
}

function dataFormatada(data){
    let ano = zeroEsquerda(data.getFullYear())
    let mes = zeroEsquerda(data.getMonth()+1)
    let dia = zeroEsquerda(data.getDate())
    let hora = zeroEsquerda(data.getHours())
    let minuto = zeroEsquerda(data.getMinutes())
    let segundos = zeroEsquerda(data.getSeconds())

    return `${dia}-${mes}-${ano} ${hora}:${minuto}:${segundos}`
}

let dataHoje = new Date()

console.log(dataFormatada(dataHoje))