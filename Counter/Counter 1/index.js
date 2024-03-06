window.prompt("Let's count!");

const label = document.getElementById("Counter");
const decreaseButton = document.getElementById("Decrease");
const resetButton = document.getElementById("Reset");
const increaseButton = document.getElementById("Increase");

let count = Number(window.prompt("Just enter the initial number")); // Data variable
label.textContent = count;

// Functions

decreaseButton.onclick = function(){
    count--;
    label.textContent = count;
}
resetButton.onclick = function(){
    count = 0;
    label.textContent = count;
}
increaseButton.onclick = function(){
    count++;
    label.textContent = count;
}