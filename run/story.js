import {getButtonGoBack} from "../../components/button.js";


//backbutton
const backButton = getButtonGoBack('Terug naar start', 'index.html');


const wrapper = document.querySelector('.wrapper');


export const introGame = () => {

    wrapper.appendChild(backButton);
}


window.onload = introGame;