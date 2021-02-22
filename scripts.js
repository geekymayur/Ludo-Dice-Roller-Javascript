

var showDiceFace = document.getElementById("showDiceFace");
function rollme() {
    showDiceFace.src = `/assets/dice2.gif`


    // showDiceFace.src = `/assets/dice-face/diceNum${DiceNum}.png`
    function rollDice() {
        var DiceNum = Math.floor(Math.random() * 6) + 1;

        showDiceFace.src = `/assets/dice-face/diceNum${DiceNum}.png`
        console.log(DiceNum);
    }
    setTimeout(rollDice, 1000)
    // setTimeout(rollDice);
}