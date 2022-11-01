import playSound from "../../modules/sound.js";
import {showPopup} from "../../components/popup.js";
import getPuzzle from "./puzzle/puzzleLayout.js";

const closetDoor = (svg) => {
    addClassClickable( svg.querySelector("#closet #closet_door"));
    svg.querySelector("#closet #closet_door").addEventListener("click", () => {
            playSound('assets/audio/room1/old_closet_door.wav');
            const closetDoor = svg.querySelector("#closet #door");
            closetDoor.style.display = 'none';
        if (localStorage.getItem('key1')){
            console.log('grabbed the letter')
            svg.querySelector("#closet #letter").style.display = 'none'
            showPopup('Nothing Left :(', 'Already got a letter out of this closet')
        } else {
            svg.querySelector("#letter").style.display = 'block'
            showPopup('Found Something!', 'Looks like an old letter. Interesting. ')
            addClassClickable( svg.querySelector("#closet #letter"));
            svg.querySelector("#closet #letter").addEventListener("click", () => {
                playSound('assets/audio/room1/wrong.mp3');
                showPopup("I can't read it. WTF", 'There is a lock. I have to unlock a puzzle first')
                getPuzzle()
            })
        }
        });
}

const painting = (svg) => {
    addClassClickable(svg.querySelector('#painting'))
    svg.querySelector('#painting').addEventListener('click', () => showPopup("Beautiful Painting. But that's it!", 'Just an ordinary painting....'))
}

const drawers = (svg) => {
    // make clickable
    addClassClickable(svg.querySelector("#table #drawer1"))
    addClassClickable(svg.querySelector("#table #drawer2"))
    addClassClickable(svg.querySelector("#table #drawer3"))
    addClassClickable(svg.querySelector("#table #drawer4"))

    svg.querySelector("#table #drawer1").addEventListener("click", () => {
        playSound('assets/audio/room1/drawer.wav');
        showPopup('Nothing Found Unfortunately. Keep Looking!', 'Empty drawer :(')
    })
    svg.querySelector("#table #drawer2").addEventListener("click", () => {
        playSound('assets/audio/room1/drawer.wav');
        showPopup('HAHA, Oh Never mind. Nothing Found Unfortunately. Keep Looking!', 'Empty drawer :(')
    })

    svg.querySelector("#table #drawer3").addEventListener("click", () => {
        playSound('assets/audio/room1/drawer.wav');
        showPopup('Lets see. Nothing Found Unfortunately. Keep Looking!', 'Empty drawer :(')
    })
    svg.querySelector("#table #drawer4").addEventListener("click", () => {
        playSound('assets/audio/room1/drawer.wav');
        showPopup('Nope. Nothing Found Unfortunately. Keep Looking!', 'Empty drawer :(')
    })
}

const addClassClickable = (el) => {
    el.style.cursor = 'pointer'
}

export const assignClickAbles = () => {
    document.querySelector("object").addEventListener("load", () => {
        // clickables are embedded by the browser
        const svg = document.querySelector("object").contentDocument.getElementsByTagName('svg')[0]
        svg.style.width = '100%'
        svg.style.height = '100%'

        closetDoor(svg)

        painting(svg)

        drawers(svg)


    });
}