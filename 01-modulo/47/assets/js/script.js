const hoje = new Date("2022-03-20");

let dia = hoje.getDay();

let textoSemana;

if (dia === 0){
    textoSemana = "Domingo"
}else if(dia === 1){
    textoSemana = "Segunda"
}else if(dia === 2){
    textoSemana = "Terça"
}else if(dia === 3){
    textoSemana = "Quarta"
}else if(dia === 4){
    textoSemana = "Quinta"
}else if(dia === 5){
    textoSemana = "Sexta"
}else if(dia === 6){
    textoSemana = "Sabado"
}
console.log(textoSemana)

switch(dia){
    case 0:;
        textoSemana = "D";
        break;
    case 1:;
        textoSemana = "S";
        break;
    case 2:;
        textoSemana = "T";
        break;
    case 3:;
        textoSemana = "Q";
        break;
    case 4:;
        textoSemana = "QUI";
        break;
    case 5:;
        textoSemana = "Sex";
        break;
    case 6:;
        textoSemana = "Sab";
        break;
    default:
        textoSemana = "D";
}
console.log(textoSemana)

