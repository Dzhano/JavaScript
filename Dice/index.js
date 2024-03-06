const dice = document.getElementById("Dice");

dice.onclick = function(){
    dice.textContent = Number(Math.floor(Math.random() * 6) + 1);
}