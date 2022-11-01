import {getHeader, updateStatusHeader} from "../../components/header.js";
import {getFrame} from "../../components/frame.js";
import {getButtonGoBack} from "../../components/button.js";

//header
const header = getHeader('You need to move the pin to the correct position', 'Time to break in...');
//frame
const frame = getFrame('assets/frames/intro/spel1.svg');
//backbutton
const backButton = getButtonGoBack('back to the house...', 'frontdoor.html');

//Clickables
const assignClickAbles = () =>{
    document.querySelector("object").addEventListener("load", () =>{
        const svg = document.querySelector("object").contentDocument.getElementsByTagName('svg')[0]
        svg.style.width = '100%'
        svg.style.height = '100%'
            svg.querySelector('#lockbutton').addEventListener("click", () => makeDraggable(evt))
            svg.querySelector('#lockpick').addEventListener("click", () => alert("move pick"))
    });
}

function makeDraggable(evt){
    var svg = evt.target;
    svg.addEventListener('mousedown', startDrag);
    svg.addEventListener('mousemove', drag);
    svg.addEventListener('mouseup', endDrag);
    svg.addEventListener('mouseleave', endDrag);

    var selectedElement = false;


    function startDrag(evt){
        if(evt.target.classList.contains('draggable')){
            selectedElement = evt.target;
        }
    }

    function drag(evt){
        if(selectedElement){
            evt.preventDefault();
            var x = parseFloat(selectedElement.getAttributeNs(null, 'x'));
            selectedElement.setAttributeNS(null, 'x', x+0.1);
        }
    }

    function endDrag(evt){
        selectedElement = null;
    }
}
const wrapper = document.querySelector('.wrapper');

export const introGame = () => {
    wrapper.appendChild(header);

    wrapper.appendChild(frame);

    assignClickAbles();

    wrapper.appendChild(backButton);
}


window.onload = introGame;
