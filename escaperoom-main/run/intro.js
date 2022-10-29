import {getHeader, updateStatusHeader} from "../../components/header.js";
import {getFrame} from "../../components/frame.js";
import {getButtonGoBack} from "../../components/button.js";


//header
const header = getHeader('', 'The House...');

//frame
const frame = getFrame('assets/frames/intro/house.svg');

//backbutton
const backButton = getButtonGoBack('Terug naar start', '');

const assignClickAbles = () =>{
    document.querySelector("object").addEventListener("load", () =>{
        const svg = document.querySelector("object").contentDocument.getElementsByTagName('svg')[0]
        svg.style.width = '100%'
        svg.style.height = '100%'
            svg.querySelector('#frontdoor').addEventListener("click", () => alert("To the door"))
    });
}

const wrapper = document.querySelector('.wrapper');

export const introGame = () => {
    wrapper.appendChild(header);

    wrapper.appendChild(inventory)

    wrapper.appendChild(backButton)
}


window.onload = introGame;
