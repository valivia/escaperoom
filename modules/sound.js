const playSound = (url) => {
    const audio = new Audio(url);
    audio.play();
}

const playBackgroundMusic = (url) => {
    const audio = new Audio(url);
    audio.volume = 0.6
    audio.loop = true
    audio.play();
}

export {playSound, playBackgroundMusic};