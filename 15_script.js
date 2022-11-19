const gameFieldArray = new Array(15);
const gameField = document.querySelector('[data-game-field]');
gameFieldArray[0] = null;
function showArray() {
    for (let count = 0; count < 16; count++) {
        document.getElementById(count).innerHTML = gameFieldArray[count];
    }
}
for (let count = 0; count < 16; count++) {
    if (count !== 0) { gameFieldArray[count] = count };
    const gameElement = document.createElement('button');
    gameField.append(gameElement);
    gameElement.classList.add('game-element');
    gameElement.id = count;
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