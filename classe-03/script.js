const botoesModal = document.querySelectorAll('.modal button');
const botaoInscrever = document.querySelector('.btn');
const botaoConfirmar = document.querySelector('.confirmar');
const botaoCancelar = document.querySelector('.cancelar');
const modal = document.querySelector('.modal');

botaoInscrever.addEventListener('click', inscrever);

botaoConfirmar.addEventListener('click', () => {
    botaoInscrever.textContent = 'INSCREVER-SE';
    botaoInscrever.classList.remove('inscrito');
    botaoInscrever.addEventListener('click', inscrever);
});

botaoCancelar.addEventListener('click', () => {
    botaoInscrever.addEventListener('click', desinscrever);
})

botoesModal.forEach(botao => {
    botao.addEventListener('click', () => {
        modal.classList.add('escondido');
    });
});

function inscrever(event) {
    const botaoClicado = event.target;

    botaoClicado.textContent = 'INSCRITO';
    botaoClicado.classList.add('inscrito');
    botaoClicado.removeEventListener('click', inscrever);
    botaoClicado.addEventListener('click', desinscrever);
}

function desinscrever(event) {
    modal.classList.remove('escondido');
    event.target.removeEventListener('click', desinscrever);
}