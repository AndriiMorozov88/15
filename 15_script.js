const gameFieldArray = new Array(15);
const gameField = document.querySelector('[data-game-field]');
gameFieldArray[0] = null;
function showArray() {
    for (let j = 0; j < 16; j++) {
        document.getElementById(j).innerHTML = gameFieldArray[j];
    }
}
for (let i = 0; i < 16; i++) {
    if (i !== 0) { gameFieldArray[i] = i };
    const gameElement = document.createElement('button');
    gameField.append(gameElement);
    gameElement.classList.add('game-element');
    gameElement.id = i;
    gameElement.addEventListener('click', () => {
        translateArray(gameElement.id);
        showArray()
    })
}
function translateArray(value) {
    indexNull = gameFieldArray.indexOf(null);
    indexElement = value;
    [gameFieldArray[indexElement], gameFieldArray[indexNull]] = [gameFieldArray[indexNull], gameFieldArray[indexElement]];
    console.log(gameFieldArray);
}
gameFieldArray.sort((a, b) => Math.random() - .5);
showArray();
console.log(gameFieldArray);