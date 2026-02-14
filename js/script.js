var ano_atual = document.getElementById('ano')
var ano = new Date().getFullYear()

function atualizarAno() {
    ano_atual.innerText = ano 
}

/*Perguntas Frequentes FAQ */
var perguntasContainer = document.querySelectorAll('.pergunta-container')

perguntasContainer.forEach((container) => {
    var mostrar = container.querySelector('#mostrar')
    var esconder = container.querySelector('#esconder')
    var resposta = container.querySelector('.resposta')

    if (!mostrar || !esconder || !resposta) return

    resposta.style.maxHeight = '0px'

    mostrar.addEventListener('click', () => {
        resposta.classList.add('show')
        resposta.style.maxHeight = resposta.scrollHeight + 'px'
        esconder.style.display = 'inline-flex'
        mostrar.style.display = 'none'
    })

    esconder.addEventListener('click', () => {
        resposta.style.maxHeight = '0px'
        resposta.classList.remove('show')
        esconder.style.display = 'none'
        mostrar.style.display = 'inline-flex'
    })
})

/* MENU Hamburguer */

var menu = document.getElementById('menu-hamburguer')
var menuContainer = document.getElementById('menu-container')
var janela = window

janela.addEventListener('resize', mostrarHamburguer)

menu.addEventListener('click', (e) => {
    if (e.target.id == 'menu-hamburguer') {
        if (menuContainer.style.display != 'flex') {
            console.log('1')
            menuContainer.style.display = 'flex'
            
        } else {
            menuContainer.style.display = 'none'
        } 
    }
})

function mostrarHamburguer() {
    if (janela.innerWidth > 768) {
        menuContainer.style.display = 'flex'
    } else {
        menuContainer.style.display = 'none'

    }
}




