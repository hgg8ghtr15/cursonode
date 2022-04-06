function falaFrase(comeco){
    function falaResto(resto){

        return comeco+" "+resto
    }
    return falaResto
}

console.log(falaFrase("ola"))

const fala = falaFrase("ola")
const resto = fala("bom dia")
console.log(resto)

function criaMultiplicador(multiplicador){
    function multiplica(n){
        return n * multiplicador
    }
    return multiplica
}

const dobro = criaMultiplicador(2)
const triplo = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(dobro(5),triplo(5),quadriplica(5))



