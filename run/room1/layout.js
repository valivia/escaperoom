import {getHeader, updateStatusHeader} from "../../components/header.js";
import {getFrame} from "../../components/frame.js";
import {getInventory} from "../../components/inventory.js";
import {getButtonGoBack} from "../../components/button.js";
import {assignClickAbles} from "./assignClickAbles.js";
import {playBackgroundMusic} from "../../modules/sound.js";

// create every component
// header
const header = getHeader('Click on the selections inside the frame (selections are being shown as a black border stroke)', 'A mysterious Room...')

// frame
const frame = getFrame('assets/frames/room1/frame.svg');

// inventory
const inventory = getInventory();

// back button
const backButton = getButtonGoBack('Back to the hallway', 'hallway.html')


const wrapper = document.querySelector('.wrapper')

export const exampleGame = () => {
    wrapper.appendChild(header);

    wrapper.appendChild(frame)
    // assign clickables frame
    assignClickAbles();

    wrapper.appendChild(inventory)

    wrapper.appendChild(backButton)

    playBackgroundMusic('assets/audio/hallway/mystery_piano.wav')
}

window.onload = exampleGame;

