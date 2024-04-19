import { data } from "./dataLoad";

export async function renderPilot() {
    try {
        data.forEach((pilot, key) => {
            const createPilot = document.createElement('li');

            createPilot.classList.add('piloto');

            if (key === 0) {
                createPilot.classList.add('selecionado');

                const pilotSelect = document.querySelector('.piloto-selecionado');

                const dataSelect = `<img title="${pilot.name}" src="./src/images/card-${pilot.cardName}.png" alt="Piloto ${pilot.name}" class="piloto-grande">
                    <div class="informacoes-piloto">
                        <h2 class="nome-piloto" id="nome-piloto">${pilot.name}</h2>
                        <p class="descricao-piloto" id="descricao-piloto">${pilot.description}</p>
                    </div>`;

                pilotSelect.innerHTML = dataSelect;
            };

            createPilot.id = pilot.cardName;
            createPilot.setAttribute("data-name", pilot.name);
            createPilot.setAttribute("data-description", pilot.description);
            createPilot.setAttribute("title", pilot.name);

            const imagePilot = document.createElement('img');

            imagePilot.src = `./src/images/card-${pilot.cardName}.jpeg`;

            createPilot.appendChild(imagePilot);

            document.querySelector('.lista-de-pilotos').appendChild(createPilot);
        });
    } catch (error) {
        console.error('Erro ao carregar o arquivo JSON:', error);
    }
}