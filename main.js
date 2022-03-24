let nome = document.getElementById('nome')
let idade = document.getElementById('idade')
let linguagem = document.getElementById('linguagem')
let extra = document.getElementById('extra');

let form = document.getElementById('formulario')

let form2 = document.getElementById('formulario2')

form.addEventListener('submit', function(e) {

    let div = document.getElementById('resposta');

    let div2 = document.getElementById('resposta2');


    
    let resposta = "<p>" + "Olá " + nome.value + ", você tem " + idade.value + " anos e já está aprendendo " + linguagem.value + "</p>";
    div.innerHTML = resposta;
    
    let resposta2 = "<p>Você gosta de estudar " + linguagem.value + "?</p>";
    div2.innerHTML = resposta2;

    let form2 = document.getElementById('formulario2').style.display = "flex"
    form2.innerHTML = form2

    e.preventDefault();

  
});


form2.addEventListener('submit', function(e) {

        let div3 = document.getElementById('resposta3');

        console.log(extra.value)
        if (extra.value == "1") {
            let resposta3 = "<p>Muito bom! Continue estudando e você terá muito sucesso.</p>"
            div3.innerHTML = resposta3
        } else if (extra.value == "2"){
            let resposta3 = "<p>Ahh que pena... Já tentou aprender outras linguagens?</p>"
            div3.innerHTML = resposta3
        } else {
            alert("erro")
        }
        e.preventDefault();
    });
