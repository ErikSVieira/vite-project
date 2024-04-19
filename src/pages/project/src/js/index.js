import { renderPilot } from "./renderData";
import { button } from "./button";


async function renderDataEBtn() {
    try {
        await renderPilot();

        button();
    } catch (erro) {
        console.error(erro);
    }
    
} 

renderDataEBtn();