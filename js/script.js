var ano_atual = document.getElementById('ano')
var ano = new Date().getFullYear()

function atualizarAno() {
    ano_atual.innerText = ano 
}