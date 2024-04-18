function continueGame() {
    const alpha = getARandomAlphabet();
    const currentAlpha = document.getElementById('current-alpha');
    currentAlpha.innerText = alpha;
    setBGColor(alpha);
}

function startPlay() {
    hideElementsByID('home-part');
    showElementsByID('ground-part');
    continueGame();
}

function handleKeyUp(event) {
    const pressedKey = event.key;
    const currentAlpha = document.getElementById('current-alpha');
    const currentAlphabet = currentAlpha.innerText;
    if (pressedKey === currentAlphabet) {
        console.log("you win");
        removeBGColor(currentAlphabet);
        const currentScore = getTextElementByID('current-score');
        const newScore = currentScore + 1;
        continueGame();

        setTextElementByID('current-score', newScore);

    }
    else {
        console.log('you lost');
        const currentLife = getTextElementByID('current-life');
        const newLife = currentLife - 1;
        setTextElementByID('current-life', newLife);

        if (newLife === 0) {
           gameOver();
        }
    }
}
document.addEventListener('keyup', handleKeyUp)

