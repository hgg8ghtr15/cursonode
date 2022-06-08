const nomes = ["eduardo", "maria", "Joana"]
const nomes2 =  [...nomes]
console.log(nomes)
console.log(nomes2)
console.log("-------")
nomes.pop()
console.log(nomes)
console.log(nomes2)
nomes2.push("Lucas")
console.log(nomes2)

const nomeTeste = nomes.slice(0, -1)
console.log(nomeTeste)
console.log(nomeTeste)

const nomeString = "Fabio Lucas Marconi"
const strEmArray = nomeString.split(" ")
console.log(strEmArray)

const arrayEmNome = strEmArray.join(" ")
console.log(arrayEmNome)