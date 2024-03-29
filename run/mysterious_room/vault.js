import { getHeader } from "../../components/header.js";
import { getFrame } from "../../components/frame.js";
import { getInventory } from "../../components/inventory.js";
import { getButtonGoBack } from "../../components/button.js";
import { showPopup } from "../../components/popup.js";
import { playBackgroundMusic, playSound } from "../../modules/sound.js";

// create every component
// header
const header = getHeader('Maybe the note i found has the vault combination?', "The Vault")

// frame
const frame = getFrame('assets/frames/vaultroom/vault.svg');

// inventory
const inventory = getInventory();

// back button
const backButton = getButtonGoBack('Go back to the mysterious room', '/mysterious_room.html')

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
        showPopup("Incorrect", "Hmmm it doesnt budge");
        playSound("assets/audio/vault/vault_jammed.mp3")
        return;
    }

    knob1.style.transform = rotation(0);
    knob2.style.transform = rotation(120);
    knob3.style.transform = rotation(240);

    if (currentSolution < 2) {
        showPopup("Success!", `I can hear a part of the lock unlocking, ${2 - currentSolution} left...`)
        playSound("assets/audio/vault/vault_move.mp3")
        currentSolution += 1;
        return
    }

    playSound("assets/audio/vault/vault_open.mp3")
    showPopup("Objective completed!", "These are the secrets! now i need to quickly get out of here...")
    localStorage.setItem("key2", "aaa")
    setTimeout(() => location.reload(), 2000)
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

    playSound("assets/audio/vault/knob_move.mp3")
}

const configureKnob = (id, deg) => {
    const svg = document.querySelector("object").contentDocument.getElementsByTagName('svg')[0]
    const knob = svg.querySelector(`#${id}`);

    knob.style.transformOrigin = "center"
    knob.style.transformBox = "fill-box"
    knob.style.transition = "transform 200ms ease-in-out"
    knob.style.transform = rotation(deg);
    knob.style.cursor = 'pointer'
    knob.addEventListener("click", () => onKnobClick(id))
}

const assignClickAbles = () => {
    document.querySelector("object").addEventListener("load", () => {

        // clickables are embedded by the browser
        const svg = document.querySelector("object").contentDocument.getElementsByTagName('svg')[0]
        svg.style.width = '100%'
        svg.style.height = '100%'

        if (localStorage.getItem("key2") !== null) {
            hideButtons();
            showPopup("Hurry up!", "I already have the secrets, I need to quickly get out!!")
            return;
        }

        configureKnob("knob1", 0);
        configureKnob("knob2", 120);
        configureKnob("knob3", 240);

        const confirmButton = svg.querySelector("#confirm");
        confirmButton.style.cursor = 'pointer'
        confirmButton.addEventListener("click", () => checkCombination())

        playBackgroundMusic("assets/audio/vault/vault_ambience.mp3")
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

