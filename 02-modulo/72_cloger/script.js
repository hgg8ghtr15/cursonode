function gerarTimeOut(min = 1000, max = 3000){
    const valor = Math.random() * (max - min) + min
    return valor.toFixed()
}
function f1(callback){ 
    setTimeout(function(){
        console.log("f1")
        if (callback) callback()
    },gerarTimeOut())
}
function f2(callback){ 
    setTimeout(function(){
        console.log("f2")
        if (callback) callback()
    },gerarTimeOut())
}
function f3(callback){ 
    setTimeout(function(){
        console.log("f3")
        if (callback) callback()
    },gerarTimeOut())
}


// f1(function(){
//     f2(function() {
//         f3(function(){
//             "Função de callback"
//         })
//     })
// })

f1(f1Callback)

function f1Callback(callback){
    f2(f2callback)
}
function f2callback(callback){
    f3(f3callback)
}
function f3callback(callback){
    console.log("ola mundo")
}