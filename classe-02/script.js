const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('change', (event) => {
        if (event.target.id === 'quiz-1') {
            if (event.target.value === 'lua') {
                event.target.classList.remove('input-color--padrao');
                event.target.classList.add('acerto');
                event.target.value = 'Resposta Correta!';
            }
        } else if (event.target.id === 'quiz-2') {
            if (event.target.value === 'sol') {
                event.target.classList.remove('input-color--padrao');
                event.target.classList.add('acerto');
                event.target.value = 'Resposta Correta!';
            }
        } else if (event.target.id === 'quiz-3') {
            if (event.target.value === '9') {
                event.target.classList.remove('input-color--padrao');
                event.target.classList.add('acerto');
                event.target.value = 'Resposta Correta!';
            }
        } else if (event.target.id === 'quiz-4') {
            if (event.target.value === '1024') {
                event.target.classList.remove('input-color--padrao');
                event.target.classList.add('acerto');
                event.target.value = 'Resposta Correta!';
            }
        } else if (event.target.id === 'quiz-5') {
            if (event.target.value === '8') {
                event.target.classList.remove('input-color--padrao');
                event.target.classList.add('acerto');
                event.target.value = 'Resposta Correta!';
            }
        } else if (event.target.id === 'quiz-6') {
            if (event.target.value === 'c') {
                event.target.classList.remove('input-color--padrao');
                event.target.classList.add('acerto');
                event.target.value = 'Resposta Correta!';
            }
        } else if (event.target.id === 'quiz-7') {
            if (event.target.value === '3') {
                event.target.classList.remove('input-color--padrao');
                event.target.classList.add('acerto');
                event.target.value = 'Resposta Correta!';
            }
        } else if (event.target.id === 'quiz-8') {
            if (event.target.value === 'verde') {
                event.target.classList.remove('input-color--padrao');
                event.target.classList.add('acerto');
                event.target.value = 'Resposta Correta!';
            }
        } else if (event.target.id === 'quiz-9') {
            if (event.target.value === 'maravilhoso') {
                event.target.classList.remove('input-color--padrao');
                event.target.classList.add('acerto');
                event.target.value = 'Resposta Correta!';
            }
        } else if (event.target.id === 'quiz-10') {
            if (event.target.value === 'depois') {
                event.target.classList.remove('input-color--padrao');
                event.target.classList.add('acerto');
                event.target.value = 'Resposta Correta!';
            }
        }
    });
});