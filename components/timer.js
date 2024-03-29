import {checkParams} from "../modules/functionValidation.js";
import {showPopup} from "./popup.js";

let maxCount = parseInt(localStorage.getItem('time')) || 500;

const convertToTime = (count) => {
    // validation parameters
    checkParams(
        [
            {
                param: count,
                dataType: "number"
            }
        ]
    )
    let minutes = Math.floor(count / 60)
    let seconds = count % 60

    // the following conditions below are made to beautify the time output
    if (minutes < 10){
        minutes = '0' + minutes.toString()
    }

    if (seconds < 10){
        seconds = '0' + seconds.toString()
    }

    return {
        minutes,
        seconds
    }
}

const setTimer = () => {
    maxCount = maxCount - 1;
    localStorage.setItem('time', maxCount.toString());
}


const getTimer = (timeBlock) => {
    setInterval(() => {
        // checking timer if it exceeded its limit (limit = 0)
        checkTimer()
        setTimer();
        const getSeconds = convertToTime(maxCount).seconds;
        const getMinutes = convertToTime(maxCount).minutes;
        timeBlock.innerText = `${getMinutes} : ${getSeconds}`;

    }, 1000)
}

const checkTimer = () => {
    // when timer is zero
    if (maxCount <= 0){
        localStorage.removeItem('time')
        showPopup('Time is up!', 'You failed your mission...', true);
        setTimeout(() => location.href = '/', 2000);
    }
}

export {getTimer}