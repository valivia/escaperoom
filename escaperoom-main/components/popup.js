import {checkParams} from "../modules/functionValidation.js";

const rootElement = document.body;

const overlay = document.createElement('article')
overlay.classList.add('overlay');

const section = document.createElement("section")
section.classList.add("popup")

const onClose = () => {
    overlay.style.display = 'none'
    overlay.remove()
}

const showPopup = (title, message, warning = false) => {
    // validation parameters
    checkParams(
        [
            {
                param: title,
                dataType: "string"
            },
            {
                param: message,
                dataType: "string"
            },
            {
                param: warning,
                dataType: "boolean"
            }
        ]
    )

    // if the popup information is a warning
    if (warning) {
        section.classList.add('warning')
    } else {
        section.classList.remove('warning')
    }

    // filling in the content
    overlay.style.display = 'block'
    section.innerHTML = `
    <section><button class="close">X</button></section>
    <h1>${title}</h1>
    <p>${message}</p>  
    `
    // appending to the DOM
    overlay.appendChild(section)
    rootElement.appendChild(overlay)

    // creating events for closing the popup
    const closeBTN = rootElement.querySelector('.close');

    closeBTN.addEventListener('click', () => onClose())

    window.onclick = function(event) {
        if (event.target === overlay) {
            onClose()
        }
    }
}

export {showPopup};