const modal = document.querySelector('.modal');
const esconderIcones = document.querySelector('.modal #esconderIcones');
const esconderBotao = document.querySelector('.modal #esconderBotao');
const botaoMostrar = document.querySelector('#botaoMostrar');

esconderIcones.addEventListener('click', esconderModal);
esconderBotao.addEventListener('click', esconderModal);
botaoMostrar.addEventListener('click', mostrarModal);

function esconderModal(){
    modal.id = 'esconder';
}

function mostrarModal(){
    modal.id = 'mostrar';
}