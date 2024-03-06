const temperature = document.getElementById("Temperature");
const checkCelToFar = document.getElementById("toFahrenheit");
const checkFarToCel = document.getElementById("toCelsuis");
const result = document.getElementById("Result");

let temp;

function convert(event){
    event.preventDefault(); // Prevent form submission

    if(checkCelToFar.checked){
        temp = Number(temperature.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F";
    }
    else if(checkFarToCel.checked){
        temp = Number(temperature.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "C";
    }
    else{
        result.textContent = "Please select a unit.";
    }
}