window.prompt("Let's count!");

const label = document.getElementById("Counter");
const decreaseButton = document.getElementById("Decrease");
const resetButton = document.getElementById("Reset");
const increaseButton = document.getElementById("Increase");
const countButton = document.getElementById("start");

let count = 0; // Data variable

countButton.onclick = function(){
    let initial = label.value;
    if(initial == ""){
        label.textContent = "Enter a value! Otherwise we will start with zero.";
    }
    else{
        count = Number(initial);
        label.textContent = count;
    }
}

// Functions

decreaseButton.onclick = function(){
    count--;
    label.value = count;
}
resetButton.onclick = function(){
    count = 0;
    label.value = count;
}
increaseButton.onclick = function(){
    count++;
    label.value = count;
}