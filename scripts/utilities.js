function hideElementsByID(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
}

function showElementsByID(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove('hidden');
}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNum = Math.random() * 25;
    const index = Math.round(randomNum);
    const alphabet = alphabets[index];
    return alphabet;
}

function setBGColor(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add('bg-orange-400');
}
function removeBGColor(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove('bg-orange-400');

}

function getTextElementByID(elementID) {
    const element = document.getElementById(elementID);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}


function setTextElementByID(elementID, value) {
    const element = document.getElementById(elementID);
    element.innerText = value;

}

function playAgain() {
    hideElementsByID('score-part');
    showElementsByID('ground-part');
    setTextElementByID('current-life', 5)
    setTextElementByID('current-score', 0)
}

function gameOver() {
    hideElementsByID('ground-part');
    showElementsByID('score-part');
    const finalScore = getTextElementByID('current-score');
    console.log('kkkk')
    setTextElementByID('final-score', finalScore);

}