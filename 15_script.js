const gameFieldArray = new Array(16);
const gameFieldArrayWin = new Array(16)
const gameField = document.querySelector('[data-game-field]');
const stepParagraph = document.querySelector('[data-step-amount]');
const win = document.querySelector('[data-win]');
let stepAmount = 0;
stepParagraph.innerHTML = `Steps: ${stepAmount}`;
gameFieldArray[0] = null;
function showPossibleTurn(index) {
    const possibleTurnArray = [[1, 4], [0, 2, 5], [1, 3, 6], [2, 7], [0, 5, 8], [1, 4, 6, 9], [2, 5, 7, 10], [3, 6, 11], [4, 9, 12], [5, 8, 10, 13], [6, 9, 11, 14], [7, 10, 15], [8, 13], [9, 12, 14], [10, 13, 15], [11, 14]];
    return possibleTurnArray[index];
};
function showArray() {
    for (let count = 0; count < 16; count++) {
        indexNull = gameFieldArray.indexOf(null);
        document.getElementById(count).innerHTML = gameFieldArray[count];
        document.getElementById(count).classList.remove('game-element--possible', 'game-element--null');
    };
    showPossibleTurn(indexNull).forEach((element) => {
        document.getElementById(element).classList.add('game-element--possible');
        document.getElementById(indexNull).classList.add('game-element--null');
    });
};
function checkWinCombination() {
    return gameFieldArray.toString() === gameFieldArrayWin.toString();
}
function translateArray(index) {
    indexElement = index;
    [gameFieldArray[indexElement], gameFieldArray[indexNull]] = [gameFieldArray[indexNull], gameFieldArray[indexElement]];
};
for (let count = 0; count < 16; count++) {
    if (count !== 0) { gameFieldArray[count] = count };
    gameFieldArrayWin[count] = count + 1;
    const gameElement = document.createElement('button');
    gameField.append(gameElement);
    gameElement.classList.add('game-element');
    gameElement.id = count;
    gameElement.addEventListener('click', () => {
        if (gameElement.classList.contains('game-element--possible')) {
            translateArray(gameElement.id);
            stepAmount ++;
            stepParagraph.innerHTML = `Steps: ${stepAmount}`;
            showArray();
            if (checkWinCombination()) {
                win.classList.remove('game-state__paragraph--invisible');
            }
        };
    })
};
gameFieldArray.sort((a, b) => Math.random() - .5);
gameFieldArrayWin[15] = null;
showArray();
document.querySelector('[data-new-game]').addEventListener('click', () => {
    let newGame = confirm('Are you sure?');
    if (newGame) {
        location.reload();
    };
});
