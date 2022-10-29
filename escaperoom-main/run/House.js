import {getHeader, updateStatusHeader} from "../../components/header.js";
import {getFrame} from "../../components/frame.js";
import {getButtonGoBack} from "../../components/button.js";


//header
const header = getHeader('You need to go inside the house.', 'The House...');

//frame
const frame = getFrame('assets/frames/intro/house.svg');

//backbutton
const backButton = getButtonGoBack('Terug naar start', 'index.html');

const assignClickAbles = () =>{
    document.querySelector("object").addEventListener("load", () =>{
        const svg = document.querySelector("object").contentDocument.getElementsByTagName('svg')[0]
        svg.style.width = '100%'
        svg.style.height = '100%'
            svg.querySelector('#frontdoor').addEventListener("click", () => {window.location.href = 'frontdoor.html'
        })
    });
}

const wrapper = document.querySelector('.wrapper');

export const introGame = () => {
    wrapper.appendChild(header);

    wrapper.appendChild(frame);

    assignClickAbles();

    wrapper.appendChild(backButton);
}


window.onload = introGame;
