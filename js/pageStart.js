let pageStart = document.querySelector('.pageStart');
let inputName = document.querySelector('#inputName');
let buttonName = document.querySelector('#buttonName');
let gameBlock = document.querySelector('.gameBlock')
gameBlock.hidden = true;

function checkButton(e){
    if(playerName){
        pageStart.hidden = true;
        gameBlock.hidden = false;
        gameFunc(playerName);
    }
}

function checkInput(e){
    playerName = this.value;
    buttonName.addEventListener('click', checkButton);
}

inputName.addEventListener('change', checkInput)

let random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}