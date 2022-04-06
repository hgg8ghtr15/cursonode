function principal(){
    const form = document.querySelector('.form');
    const divResultado = document.querySelector(".resultado")

    const lista = []
    
    // form.onsubmit = function (e){
    //     e.preventDefault();
    //     alert("Please enter")
    // }

    function recebeEventoForm(event) {
        event.preventDefault();

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const autura = form.querySelector('.autura')

        lista.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            autura: autura.value
        })

        console.log(lista)
        divResultado.innerHTML += `<p> ${nome.value}, ${sobrenome.value}, ${peso.value}, ${autura.value}</p>`

    }

    form.addEventListener('submit', recebeEventoForm)

}

principal()