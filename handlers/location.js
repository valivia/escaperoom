import {checkParams} from "../modules/functionValidation.js";

const handleLocation = (url) => {
    checkParams([{param: url, dataType: "string"}])
    location.href = url;
}

export default handleLocation;