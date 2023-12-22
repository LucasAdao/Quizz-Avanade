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
  
