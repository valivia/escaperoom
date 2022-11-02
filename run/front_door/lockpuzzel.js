import {getHeader, updateStatusHeader} from "../../components/header.js";
import {getFrame} from "../../components/frame.js";
import {getButtonGoBack} from "../../components/button.js";
import {showPopup} from "../../components/popup.js";
import {playSound} from "../../modules/sound.js";

//header
const header = getHeader('You need to move the pin to the correct position', 'Time to break in...');
//frame
const frame = getFrame('assets/frames/intro/spel1.svg');
//backbutton
const backButton = getButtonGoBack('back to the house...', 'frontdoor.html');

const rotation = (x) => `rotate(${x}deg)`

let currentDeg = 0;
let currentPos = 7;
let PosAwnser = Math.floor(Math.random()*11);

//Clickables
const assignClickAbles = () =>{
    document.querySelector("object").addEventListener("load", () =>{
        const svg = document.querySelector("object").contentDocument.getElementsByTagName('svg')[0]
        svg.style.width = '100%'
        svg.style.height = '100%'
            svg.querySelector('#lockbutton').style.cursor = 'pointer';
            svg.querySelector('#arrowleft').style.cursor = 'pointer';
            svg.querySelector('#arrowright').style.cursor = 'pointer';
            svg.querySelector('#lockbutton').addEventListener("click", () => checkPos())
            svg.querySelector('#arrowleft').addEventListener("click", () => rotateLeft())
            svg.querySelector('#arrowright').addEventListener("click", () => rotateRight())
    });
}

function rotateLeft(){
    if (currentPos>0){
        playSound('assets/audio/lock/turnLockPick.wav');
        currentDeg = currentDeg-25;
        currentPos = currentPos-1;
        if(currentPos == PosAwnser){
            playSound('assets/audio/lock/toCorrectPos.wav');
        }
        rotated();
        //alert(currentPos);
    }

}

function rotateRight(){
    if (currentPos<10){
        playSound('assets/audio/lock/turnLockPick.wav');
        currentDeg = currentDeg+25;
        currentPos = currentPos+1;
        if(currentPos == PosAwnser){
            playSound('assets/audio/lock/toCorrectPos.wav');
        }
        rotated();
        //alert(currentPos);
    }
}

function checkPos(){
    if(currentPos == PosAwnser){
        playSound('assets/audio/lock/openDoor.wav');
        showPopup("Goodjob, you got in", " ");
        setTimeout(() => location.href = 'hallway.html', 2000);
    }
    else{
        showPopup("The lockpick is not in the correct position", "try again");
    }
}

function rotated(){
    const lockpick = document.querySelector("object").contentDocument.getElementById("lockpick");
    lockpick.style.transformOrigin = "center";
    lockpick.style.transformBox = "fill-box"
    lockpick.style.transform = rotation(currentDeg);
}


const wrapper = document.querySelector('.wrapper');

export const introGame = () => {
    wrapper.appendChild(header);

    wrapper.appendChild(frame);

    assignClickAbles();

    wrapper.appendChild(backButton);
}


window.onload = introGame;
