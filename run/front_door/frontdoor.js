import {getHeader, updateStatusHeader} from "../../components/header.js";
import {getFrame} from "../../components/frame.js";
import {getButtonGoBack} from "../../components/button.js";


//header
const header = getHeader('You need to get inside', 'The Frontdoor...');

//frame
const frame = getFrame('assets/frames/intro/frontdoor.svg');

//backbutton
const backButton = getButtonGoBack('back to the house...', 'house.html');

const assignClickAbles = () =>{
    document.querySelector("object").addEventListener("load", () =>{
        const svg = document.querySelector("object").contentDocument.getElementsByTagName('svg')[0]
        svg.style.width = '100%'
        svg.style.height = '100%'
            svg.querySelector('#slot').addEventListener("click", () => {window.location.href = 'lockpuzzel.html'
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
