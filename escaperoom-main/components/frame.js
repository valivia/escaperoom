import {checkParams} from "../modules/functionValidation.js";

const section = document.createElement("section");
section.classList.add('frame');

const getFrame = (frameUrl) => {
    // validating param
    checkParams([
        {
            param: frameUrl, dataType: "string"
        }
    ]);


    // creating object
    const object = document.createElement("object");
    object.type = "image/svg+xml";
    object.data = frameUrl;

    // appending to frame
    section.appendChild(object)


    // returning frame
    return section;
}

export {getFrame};