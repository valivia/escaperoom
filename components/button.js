import {checkParams} from "../modules/functionValidation.js";



const getButtonWithText = (label, handler) => {
    const button = document.createElement('button');
    button.classList.add('button')
    // validation parameters
    checkParams(
        [
            {
                param: label,
                dataType: "string"
            },
            {
                param: handler,
                dataType: "function"
            }
        ]
    )

    // creating button
    button.innerHTML = `<p>${label}</p>`;

    // adding an event to the button
    button.addEventListener('click', handler)

    return button;
};

const getButtonWithIcon = (url, handler) => {
    const button = document.createElement('button');
    button.classList.add('button')
    // validation parameters
    checkParams(
        [
            {
                param: url,
                dataType: "string"
            },
            {
                param: handler,
                dataType: "function"
            }
        ]
    )

    // creating button
    button.innerHTML = `<img src=${url} alt="icon"/>`;

    // adding an event to the button
    button.addEventListener('click', handler)

    return button;
};

const getButtonGoBack = (label, locationUrl) => {
    const button = document.createElement('button');
    button.classList.add('back-button')
    // validation parameters
    checkParams(
        [
            {
                param: label,
                dataType: "string"
            },
            {
                param: locationUrl,
                dataType: "string"
            }
        ]
    )
    // creating button
    const icon = `<img src="../assets/icons/goBack.svg" alt="Go Back"/>`
    const text = `<p>${label}</p>`
    button.innerHTML = `
    ${icon}
    ${text}
    `
    // adding an event to the button
    button.addEventListener("click", () => window.location = locationUrl)

    return button;
}

export {getButtonWithText, getButtonWithIcon, getButtonGoBack};