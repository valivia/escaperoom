const assignClickAbles = () => {
    const figures = document.querySelectorAll(".figure")
    for (let i = 0; i<figures.length; i++){
        let currentColor = figures[i].dataset.color;
        figures[i].addEventListener("load", (e) => {
            // clickables are embedded by the browser
            const figureContent = e.target.contentDocument.getElementsByTagName('svg')[0]
            figureContent.children[0].style.fill = currentColor
        });
    }

    const figureButton = document.querySelectorAll(".figure-button")
    for (let i = 0; i<figureButton.length; i++){
        figureButton[i].addEventListener("load", (e) => {
            // clickables are embedded by the browser
            e.target.style.pointerEvents = 'none'
        });
    }
}

// const assignClickAbles = () => {
//     window.addEventListener("load", assignFigures)
// }

export default assignClickAbles;