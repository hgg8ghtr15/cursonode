const a1 = [1, 72, 38, 49,5,46,7,8,9,10,11,12,13]

for (var i = 0; i < a1.length; i++){
    console.log(a1[i])
}

a1.forEach(function(valor, indice, arrays){
    console.log(valor, indice ,arrays)
})