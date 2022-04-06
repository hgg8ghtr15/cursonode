let texto = window.prompt("Digite seu nome!")

window.document.body.innerHTML = `Meu nome é ${texto} <br/>`
window.document.body.innerHTML += `Meu nome tem ${texto.length()} <br/>`
window.document.body.innerHTML += `Segunda letra do nome ${texto[1]} <br/>`
window.document.body.innerHTML += `Qual o primeiro indice letra a ${texto.indexOf("a")} <br/>`
window.document.body.innerHTML += `Qual o Ultimo indice letra a ${texto.lastIndexOf("a")} <br/>`
window.document.body.innerHTML += `Quais as 3 ultimas palavras ${texto.slice()} <br/>`
window.document.body.innerHTML += `Quantidade de palavras ${texto.split(-3)} <br/>`
window.document.body.innerHTML += `Nome em Mauscolo ${texto.toUpperCase()} <br/>`
window.document.body.innerHTML += `Nome em Minuscolo ${texto.toLowerCase()} <br/>`