
function geral() {
    let tela = document.querySelector(".container")
    const hoje = new Date();

    function montarResultado(){
        const opcao = {
            dateStryle: "full",
            timeStryle: "short",
        }
        const resultado = tela.querySelector(".resultado");
        resultado.innerHTML = opcao;
    }

    function monstrarData(e) {
        e.preventDefault();
        montarResultado()
    }

    tela.addEventListener("click", monstrarData)
}
geral()