
const form = document.querySelector('.login-form');
const button = document.querySelector('.login__button');

const handleSubmit = (event) => {
   event.preventDefault();
   
   window.location = 'question1.html';
}

function mudarPagina(novaPagina) {
  window.location.href = novaPagina;
}

form.addEventListener('submit', handleSubmit);
  

let pontuacao = 0;

function mudarPagina(novaPagina, respostaCorreta) {
        if (respostaCorreta) {
            pontuacao++;
            localStorage.setItem('pontuacao', pontuacao);
            window.location.href = novaPagina;
        } else {
            alert('Ops, a resposta não está correta...');
            window.location.href = novaPagina;
        }
}

function mudarPaginaDesc(novaPagina) {
  window.location.href = novaPagina;
}

function reiniciarQuiz(novaPagina) {
  window.location.href = novaPagina;
  localStorage.clear();
}

window.onload = function() {
    const pontuacaoFinalElement = document.getElementById('pontuacaoFinal');
    const pontuacaoSalva = localStorage.getItem('pontuacao');

    if (pontuacaoSalva !== null) {
        pontuacao = parseInt(pontuacaoSalva);
        pontuacaoFinalElement.textContent = pontuacao.toString();
    } else {
        pontuacaoFinalElement.textContent = 'Zero';
    }
};

