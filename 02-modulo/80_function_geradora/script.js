function* geradora1() {
    // código 1
    yield "valor1"
    // código 1
    yield "valor2"
    // código 1
    yield "valor3"

}

const g1 = geradora1()

function* geradora2() {
    yield* g1
    yield "valor4"
    yield "valor5"
}

const g2 = geradora2()

for (let valor of g2) {
    console.log(valor)
}
console.log(g2)