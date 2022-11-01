// initialize puzzle section
// import getPuzzleLogic from "./puzzleLogic.js";
import assignClickAbles from "./assignClickAbles.js";
import getPuzzleLogic from "./puzzleLogic.js";
import puzzleLogic from "./puzzleLogic.js";

const puzzleSection = document.createElement('section');
puzzleSection.classList.add('puzzle')

export let selectedColor = null;
export let selectedFigure = null;

const generatedPuzzle = []

const createOverlay = () => {
    const overlay = document.createElement('article')
    overlay.classList.add('overlay');
}

const initializeFiguresSection = () => {

    // initialize different styles and figures
    const figures = ['triangle', 'arrow', 'circle'];
    const align = ['left', 'center', 'right'];
    const colors = ['#720000', '#004803', '#2B0B88', '#FFFFFF'];

    // initialize figures section
    const figuresSection = document.createElement('section')
    figuresSection.classList.add('figures')

    for (let i = 0; i<=3; i++){
        // creating indexes
        const figureIndex = Math.floor(Math.random() * 3);
        const alignIndex = Math.floor(Math.random() * 3);
        const colorIndex = Math.floor(Math.random() * 4);

        // creating a column
        const figureColumnSection = document.createElement('section')
        figureColumnSection.classList.add('figure-column')

        // creating object
        const object = document.createElement("object");

        object.type = "image/svg+xml";
        object.data = `/assets/icons/figures/${figures[figureIndex]}.svg`;
        object.dataset.color = colors[colorIndex]
        object.classList.add('figure')
        // object.addEventListener("load", () => {
        //     const svg = document.querySelector("object").contentDocument.getElementsByTagName('svg')[0]
        //     svg.querySelector('path').style.fill = colors[colorIndex];
        // })
        // appending object to column
        generatedPuzzle.push({color: colors[colorIndex], figure: figures[figureIndex]})

        figureColumnSection.appendChild(object)

        // creating alignment
        figureColumnSection.style.justifyContent = align[alignIndex]

        // appending to figures section
        figuresSection.appendChild(figureColumnSection);
    }

    return figuresSection;
}

const initializeControlsSection = () => {
    // initialize different styles and figures
    const figures = ['triangle', 'arrow', 'circle'];
    const colors = ['#720000', '#004803', '#2B0B88', '#FFFFFF'];

    // initialize figures section
    const controlsSection = document.createElement('section')
    controlsSection.classList.add('controls-wrapper')

    // initialize figures section
    const colorControlsSection = document.createElement('section')
    colorControlsSection.classList.add('controls')

    // initialize figures section
    const figureControlsSection = document.createElement('section')
    figureControlsSection.classList.add('controls')

    for (let i = 0; i<=3; i++){
        // creating a column
        const colorColumnSection = document.createElement('section')
        colorColumnSection.classList.add('color-button-column')

        // creating 4 colors
        const button = document.createElement('button');
        button.classList.add('color-button')
        button.style.backgroundColor = colors[i]
        button.addEventListener("click", () => {
            selectedColor = colors[i]
            const currentPhase = parseInt(localStorage.getItem('puzzle-phase'))
            getPuzzleLogic(generatedPuzzle, button)
            if (currentPhase < parseInt(localStorage.getItem('puzzle-phase'))){
                selectedFigure = null;
                selectedColor = null;
            }
        })
        // appending color
        colorColumnSection.appendChild(button)

        // appending colors to figures section
        colorControlsSection.appendChild(colorColumnSection);

        // creating 3 figure buttons
        if (i <= 2){
            // creating a column
            const figureButtonColumnSection = document.createElement('section')
            figureButtonColumnSection.classList.add('figure-button-column')
            // creating object
            const button = document.createElement('button');
            const object = document.createElement("object");
            object.type = "image/svg+xml";
            object.data = `/assets/icons/figures/${figures[i]}.svg`;
            object.classList.add('figure-button');
            button.appendChild(object)
            button.addEventListener("click", () => {
                selectedFigure = figures[i]
                const currentPhase = parseInt(localStorage.getItem('puzzle-phase'))
                getPuzzleLogic(generatedPuzzle, button)
                if (currentPhase < parseInt(localStorage.getItem('puzzle-phase'))){
                    selectedFigure = null;
                    selectedColor = null;
                }
            })
            // appending figure button
            figureButtonColumnSection.appendChild(button)
            figureControlsSection.appendChild(figureButtonColumnSection)
        }


    }


    controlsSection.appendChild(colorControlsSection);
    controlsSection.appendChild(figureControlsSection);
    return controlsSection;
}

const createLayoutPuzzle = () => {
    // appending the figures section to the puzzle
    puzzleSection.appendChild(initializeFiguresSection())
    puzzleSection.appendChild(initializeControlsSection())
}


const appendPuzzleBeforeInventory = (puzzleSection) => {
    const wrapper = document.querySelector('.wrapper')
    const inventory = document.querySelector('.inventory');
    wrapper.insertBefore(puzzleSection, inventory)
}



const getPuzzle = () => {
    createOverlay();
    createLayoutPuzzle()

    appendPuzzleBeforeInventory(puzzleSection)

    assignClickAbles()

    puzzleLogic()
}

export default getPuzzle;