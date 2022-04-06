

function geral() {
    let tela = document.querySelector(".container")
    

    console.log(tela)
    const hoje = new Date();
    console.log(hoje)
    function formatarDataPadrao(hoje) {
        let dia = hoje.getDay();
        let mes = hoje.getMonth() + 1;
        let textoSemana;
        switch (dia) {
            case 0: ;
                textoSemana = "Domingo";
                break;
            case 1: ;
                textoSemana = "Segunda-feira";
                break;
            case 2: ;
                textoSemana = "Terça-feira";
                break;
            case 3: ;
                textoSemana = "Quarta-feira";
                break;
            case 4: ;
                textoSemana = "Quinta-feira";
                break;
            case 5: ;
                textoSemana = "Sexta-feira";
                break;
            case 6: ;
                textoSemana = "Sabado";
                break;
            default:
                textoSemana = "-----";
        }
        let textoMes;
        switch (mes) {
            case 1: ;
                textoMes = "Janeiro";
                break;
            case 2: ;
                textoMes = "Fevereiro";
                break;
            case 3: ;
                textoMes = "Março";
                break;
            case 4: ;
                textoMes = "Abriu";
                break;
            case 5: ;
                textoMes = "Junho";
                break;
            case 6: ;
                textoMes = "Julho";
                break;
            case 7: ;
                textoMes = "Agosto";
                break;
            default:
                textoMes = "-----";
        }

        return (
            `${textoSemana}, ${hoje.getDate()}, ${textoMes}, ${hoje.getFullYear()}, ${hoje.getHours()}:${hoje.getMinutes()}`
        )

    }

    function montarResultado(msg){
        const resultado = tela.querySelector(".resultado");
        resultado.innerHTML = msg;
    }

    function monstrarData(e) {
        e.preventDefault();
        montarResultado(formatarDataPadrao(hoje))
    }
    tela.addEventListener("click", monstrarData)
}
geral()


// switch(dia){
//     case 0:;
//         textoSemana = "D";
//         break;
//     case 1:;
//         textoSemana = "S";
//         break;
//     case 2:;
//         textoSemana = "T";
//         break;
//     case 3:;
//         textoSemana = "Q";
//         break;
//     case 4:;
//         textoSemana = "QUI";
//         break;
//     case 5:;
//         textoSemana = "Sex";
//         break;
//     case 6:;
//         textoSemana = "Sab";
//         break;
//     default:
//         textoSemana = "D";
// }
// console.log(textoSemana)

