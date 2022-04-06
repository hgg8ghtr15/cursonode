const nomes = ["Elizete","Fabio", "Lucas", "fantasmas"]

const [nome1, nome2, ...nomes3] = nomes
const [um, dois, tres] = nomes
console.log(nome1, nome2, nomes3)
               // 0       1       2
//             1, 2 3  1 2 3   1 2 3
 let lista = [[1,2,3],[4,5,6],[7,8,9],]
const [,[, ,num6]] = lista
console.log(num6)


// objetos

const pessoa = {
    nome:"fabio",
    sobrenome:"lucas",
    // idade: 32,
    endereco : {
        rua:"Rio Branco",
        numero:330
    }
}

const {nome :meunome, sobrenome, endereco: {numero, rua}, idade = 'não existe'} = pessoa
console.log(meunome, sobrenome, numero, rua)

const {nome, ...resto} = pessoa
console.log(nome, resto)

