import { getHeader, updateStatusHeader } from "../components/header.js";
import { getFrame } from "../components/frame.js";
import { getInventory } from "../components/inventory.js";
import { getButtonGoBack } from "../components/button.js";

// create every component
// header
const header = getHeader('Maybe something is hidden here?', "Mysterious room")

// frame
const frame = getFrame('assets/frames/vaultroom/vault.svg');

// inventory
const inventory = getInventory();

// back button
const backButton = getButtonGoBack('Go back to the mysterious room', '/vaultroom.html')


const assignClickAbles = () => {
    document.querySelector("object").addEventListener("load", () => {

        // clickables are embedded by the browser
        const svg = document.querySelector("object").contentDocument.getElementsByTagName('svg')[0]
        svg.style.width = '100%'
        svg.style.height = '100%'

    });
}

const wrapper = document.querySelector('.wrapper')

export const vaultRoom = () => {
    wrapper.appendChild(header);

    wrapper.appendChild(frame)
    // assign clickables frame
    assignClickAbles();

    wrapper.appendChild(inventory)
    wrapper.appendChild(backButton)
}

window.onload = vaultRoom;
