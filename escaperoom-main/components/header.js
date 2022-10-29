import {getButtonWithText} from "./button.js";
import {getTimer} from "./timer.js";
import {showPopup} from "./popup.js";
import {checkParams} from "../modules/functionValidation.js";

const nav = document.createElement("nav");
const tipButtonWrapper = document.createElement("section");
const title = document.createElement('h2');
const timeBlock = document.createElement('time');

const getHeader = (tip = null, status = 'current status') => {
    // validation parameters
    checkParams(
        [
            {
                param: tip,
                dataType: "string"
            },
            {
                param: status,
                dataType: "string"
            }
        ]
    )

    // filling up content
    const tipButton = tip ? getButtonWithText('?', () => showPopup('Tip', tip)) : '';
    tipButtonWrapper.appendChild(tipButton)

    title.innerText = status;

    getTimer(timeBlock)

    // load all content inside the nav
    nav.appendChild(tipButtonWrapper);
    nav.appendChild(title);
    nav.appendChild(timeBlock);

    // returning the nav
    return nav;
}

const updateStatusHeader = (status) => {
    // validation parameters
    checkParams(
        [
            {
                param: status,
                dataType: "string"
            }
        ]
    )
    // changing status
  title.innerText = status;
}

export {getHeader, updateStatusHeader};