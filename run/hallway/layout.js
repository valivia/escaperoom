import {getHeader, updateStatusHeader} from "../../components/header.js";
import {getFrame} from "../../components/frame.js";
import {getInventory} from "../../components/inventory.js";
import {getButtonGoBack} from "../../components/button.js";
import handleLocation from "../../handlers/location.js";
import {playBackgroundMusic} from "../../modules/sound.js";

// create every component
// header
const header = getHeader('Click on the selections inside the frame', 'Dark Hallway')

// frame
const frame = getFrame('assets/frames/hallway/dark-hallway.svg');
{!localStorage.getItem('light') && frame.classList.add('dark')}
{localStorage.getItem('light') === 'false' && frame.classList.add('dark')}

// inventory
const inventory = getInventory();

// back button
const backButton = getButtonGoBack('Go back Outside', 'house.html')

const lightSwitch = () => {
    if (frame.classList.contains('dark')) {
        localStorage.setItem('light', 'true')
        frame.classList.remove('dark')
        updateStatusHeader('better now')
    } else {
        frame.classList.add('dark')
        localStorage.setItem('light', 'false')
        updateStatusHeader('mwehh a bit spooky')
    }
}

const assignClickAbles = () => {
    document.querySelector("object").addEventListener("load", () => {
        // clickables are embedded by the browser
        const svg = document.querySelector("object").contentDocument.getElementsByTagName('svg')[0]
        svg.style.width = '100%'
        svg.style.height = '100%'
        svg.querySelector("#door1").style.cursor = 'pointer'
        svg.querySelector("#door2").style.cursor = 'pointer'
        svg.querySelector("#door1").addEventListener("click", () => handleLocation('mysterious_room.html'))
        svg.querySelector("#door2").addEventListener("click", () => handleLocation('room1.html'))
        svg.querySelector("#light_switch").style.cursor = 'pointer'
        svg.querySelector("#light_switch").addEventListener("click", lightSwitch)
    });
}

const wrapper = document.querySelector('.wrapper')

export const exampleGame = () => {
    wrapper.appendChild(header);

    wrapper.appendChild(frame)
    // assign clickables frame
    assignClickAbles();

    wrapper.appendChild(inventory)

    wrapper.appendChild(backButton)

    playBackgroundMusic('assets/audio/hallway/mystery.mp3')
}

window.onload = exampleGame;

