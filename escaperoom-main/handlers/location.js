import {checkParams} from "../modules/functionValidation";

const handleLocation = (url) => {
    checkParams([{param: url, dataType: "string"}])
    location.href = url;
}