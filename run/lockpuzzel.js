import {getHeader, updateStatusHeader} from "../../components/header.js";
import {getFrame} from "../../components/frame.js";
import {getButtonGoBack} from "../../components/button.js";



//header
const header = getHeader('You need to move the pin to the correct position', 'Time to break in...');

//frame
const frame = getFrame('assets/frames/intro/spel1.svg');

//backbutton
const backButton = getButtonGoBack('back to the house...', 'frontdoor.html');

const assignClickAbles = () =>{
    document.querySelector("object").addEventListener("load", () =>{
        const svg = document.querySelector("object").contentDocument.getElementsByTagName('svg')[0]
        svg.style.width = '100%'
        svg.style.height = '100%'
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
