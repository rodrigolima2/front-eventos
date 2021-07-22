const inputs = document.querySelectorAll('input');
const frutas = document.querySelectorAll('li');

inputs.forEach(input => {
    input.addEventListener('keydown', (event) => {
        if (!teclouEnter(event.code)) {
            return;
        }
        filtrarLista(frutas, event.target.value);
    });
    input.addEventListener('keydown', (event) => {
        if (!teclouEnter(event.code)) {
            return;
        }
        limparInput(event.target);
    });
    input.addEventListener('keydown', (event) => {
        if (!teclouEsc(event.code)) {
            return;
        }
        resetar(frutas);
    });
});

function teclouEnter(code) {
    return code === 'Enter';
}

function teclouEsc(code) {
    return code === 'Escape';
}

function filtrarLista(lista, filtro) {
    lista.forEach(item => {
        item.classList.remove('escondido');
        if (item && item.textContent !== filtro) {
            item.classList.add('escondido');
        }
    });
}

function limparInput(input) {
    input.value = '';
}

function resetar(lista) {
    lista.forEach(item => {
        item.classList.remove('escondido');
    })
}