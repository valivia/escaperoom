import {playSound} from "../../../modules/sound.js";
import {showPopup} from "../../../components/popup.js";
import {selectedColor, selectedFigure} from "./puzzleLayout.js";

localStorage.setItem('puzzle-phase', '1');

const puzzleComplete = () => {
    const puzzleSection = document.querySelector('.puzzle');
    playSound('assets/audio/room1/yes.mp3');
    puzzleSection.remove();
    localStorage.setItem('key1', 'letter')
    showPopup('An item has been added to your Inventory', 'You can Click on the item to see what we got');
    setInterval(() => location.reload(), 2000);
}

const removeAllActiveButtons = () => {
    for (let i = 0; i<4; i++){
        document.querySelectorAll('.color-button-column button')[i].classList.remove('button-active');
        if (i<3){
            document.querySelectorAll('.figure-button-column button')[i].classList.remove('button-active');
        }
    }
}

const removeActiveButtonsOfRow = (button) => {
    const childrenInRow = button.parentElement.parentElement.children;
    for (let i = 0; i<childrenInRow.length; i++){
        childrenInRow[i].children[0].classList.remove('button-active');
    }
}

const makeButtonActive = (button) => {
    removeActiveButtonsOfRow(button)
    button.classList.add("button-active");
}

const getPuzzleLogic = (generatedPuzzle, button) => {
    makeButtonActive(button)
    const figureColumns = document.querySelectorAll('.figure-column');
    if ((generatedPuzzle[localStorage.getItem('puzzle-phase') - 1].color === selectedColor) && (generatedPuzzle[localStorage.getItem('puzzle-phase') - 1].figure === selectedFigure)) {
        //finished phase
        removeAllActiveButtons()
        localStorage.setItem('puzzle-phase', (parseInt(localStorage.getItem('puzzle-phase')) + 1).toString())
        figureColumns[localStorage.getItem('puzzle-phase') - 2].style.backgroundColor = 'green'
        playSound('assets/audio/room1/success.wav')
        if (parseInt(localStorage.getItem('puzzle-phase')) === 5){
            puzzleComplete()
        }
    }
}

export default getPuzzleLogic;