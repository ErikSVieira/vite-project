export function button() {
    const pilotos = document.querySelectorAll('.piloto');

    pilotos.forEach(piloto => {
        piloto.addEventListener('mouseover', () => {
            if (window.innerWidth < 450) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            removeSelecaodopiloto();

            piloto.classList.add('selecionado');

            alterarImagempilotoSelecionado(piloto);

            alterarNomepilotoSelecionado(piloto);

            alterarDescricaopilotoSelecionado(piloto);
        })
    });
}

function alterarDescricaopilotoSelecionado(piloto) {
    const descricaopiloto = document.getElementById('descricao-piloto');
    descricaopiloto.innerText = piloto.getAttribute('data-description');
}

function alterarNomepilotoSelecionado(piloto) {
    const nomepiloto = document.getElementById('nome-piloto');
    nomepiloto.innerText = piloto.getAttribute('data-name');
}

function alterarImagempilotoSelecionado(piloto) {
    const pilotoGrande = document.querySelector('.piloto-grande');

    const idpiloto = piloto.attributes.id.value;
    pilotoGrande.src = `./src/images/card-${idpiloto}.png`;
    pilotoGrande.title = `${piloto.title}`;
}

function removeSelecaodopiloto() {
    const pilotoSelecionado = document.querySelector('.selecionado');
    pilotoSelecionado.classList.remove('selecionado');
}