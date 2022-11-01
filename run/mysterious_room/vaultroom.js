import { getHeader, updateStatusHeader } from "../../components/header.js";
import { getFrame } from "../../components/frame.js";
import { getInventory } from "../../components/inventory.js";
import { getButtonGoBack } from "../../components/button.js";

// create every component
// header
const header = getHeader('Starry night is my favourite painting!', "Mysterious room")

// frame
const frame = getFrame('assets/frames/vaultroom/room.svg');

// inventory
const inventory = getInventory();

// back button
const backButton = getButtonGoBack('Go back to the hallway', '/hallway.html')


const removePainting = () => {
    const svg = document.querySelector("object").contentDocument;
    const painting = svg.getElementById("painting");

    if (localStorage.getItem("paintingRemoved") === "true") {
        painting.style.transform = "translate(0,0) skew(0,0) scale(1)";
        localStorage.setItem("paintingRemoved", "false")
    } else {
        painting.style.transform = "translate(100px, 100px) skew(-10deg, 10deg) scale(0.9)";
        localStorage.setItem("paintingRemoved", "true")
    }
}

const assignClickAbles = () => {
    document.querySelector("object").addEventListener("load", () => {

        // clickables are embedded by the browser
        const svg = document.querySelector("object").contentDocument.getElementsByTagName('svg')[0]
        svg.style.width = '100%'
        svg.style.height = '100%'

        // Painting
        const painting = svg.querySelector("#painting");
        painting.addEventListener("click", removePainting);
        painting.style.transition = "transform 500ms ease-in-out"

        if (localStorage.getItem("paintingRemoved") === "true")
            painting.style.transform = "translate(100px, 100px) skew(-10deg, 10deg) scale(0.9)";

        // Vault
        const vault = svg.querySelector("#vault");
        vault.addEventListener("click", () => window.location = "/vault.html");
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

