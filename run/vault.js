import { getHeader, updateStatusHeader } from "../components/header.js";
import { getFrame } from "../components/frame.js";
import { getInventory } from "../components/inventory.js";
import { getButtonGoBack } from "../components/button.js";
import { showPopup } from "../../components/popup.js";

// create every component
// header
const header = getHeader('Maybe we need some note with the vault combination??', "The Vault")

// frame
const frame = getFrame('assets/frames/vaultroom/vault.svg');

// inventory
const inventory = getInventory();

// back button
const backButton = getButtonGoBack('Go back to the mysterious room', '/vaultroom.html')

const solutions = [[240, 120, 120], [0, 240, 0], [0, 240, 240]];
let currentSolution = 0;


const rotation = (x) => `rotate(${x}deg)`
const getKnobDeg = (knob) => Number(knob.style.transform.split("rotate(")[1].split("deg)")[0]);

const checkCombination = () => {
    const svg = document.querySelector("object").contentDocument;

    const knob1 = svg.querySelector("#knob1");
    const knob2 = svg.querySelector("#knob2");
    const knob3 = svg.querySelector("#knob3");

    if (
        solutions[currentSolution][0] !== getKnobDeg(knob1) ||
        solutions[currentSolution][1] !== getKnobDeg(knob2) ||
        solutions[currentSolution][2] !== getKnobDeg(knob3)
    ) {
        showPopup("Incorrect", "Hmmm it doesnt move");
        return;
    }

    knob1.style.transform = rotation(0);
    knob2.style.transform = rotation(120);
    knob3.style.transform = rotation(240);

    if (currentSolution < 2) {
        showPopup("Success!", `I can hear a part of the lock unlocking, ${2 - currentSolution} left...`)
        currentSolution += 1;
        return
    }

    showPopup("Objective completed!", "These are the secrets! now i need to quickly get out of here...")
    localStorage.setItem("key2", "aaa")
    hideButtons()
}

const hideButtons = () => {
    const svg = document.querySelector("object").contentDocument.getElementsByTagName('svg')[0]
    const knob1 = svg.querySelector("#knob1");
    const knob2 = svg.querySelector("#knob2");
    const knob3 = svg.querySelector("#knob3");
    const confirmButton = svg.querySelector("#confirm");

    knob1.style.display = "none";
    knob2.style.display = "none";
    knob3.style.display = "none";
    confirmButton.style.display = "none";
}


const onKnobClick = (id) => {
    const svg = document.querySelector("object").contentDocument;
    const knob = svg.getElementById(id);
    const oldDeg = getKnobDeg(knob);
    knob.style.transform = rotation((oldDeg + 120) % 360);
}


const assignClickAbles = () => {
    document.querySelector("object").addEventListener("load", () => {

        // clickables are embedded by the browser
        const svg = document.querySelector("object").contentDocument.getElementsByTagName('svg')[0]
        svg.style.width = '100%'
        svg.style.height = '100%'

        const knob1 = svg.querySelector("#knob1");
        const knob2 = svg.querySelector("#knob2");
        const knob3 = svg.querySelector("#knob3");
        const confirmButton = svg.querySelector("#confirm");

        if (localStorage.getItem("key2") !== null) { 
            hideButtons();
            showPopup("Hurry up!", "I already have the secrets, I need to quickly get out!!")
            return;
        }

        const transformBox = "fill-box"

        knob1.style.transformOrigin = "center"
        knob1.style.transformBox = transformBox;
        knob1.style.transform = rotation(0);
        knob1.addEventListener("click", () => onKnobClick("knob1"))

        knob2.style.transformOrigin = "center"
        knob2.style.transformBox = transformBox;
        knob2.style.transform = rotation(120);
        knob2.addEventListener("click", () => onKnobClick("knob2"))

        knob3.style.transformOrigin = "center"
        knob3.style.transformBox = transformBox;
        knob3.style.transform = rotation(240);
        knob3.addEventListener("click", () => onKnobClick("knob3"))

        confirmButton.addEventListener("click", () => checkCombination())

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

