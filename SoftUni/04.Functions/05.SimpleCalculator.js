function simpleCalculator(numOne, numTwo, operator){
    let multiply = (x, y) => x * y;
    let divide = (x, y) => x / y;
    let add = (x, y) => x + y;
    let substract = (x, y) => x - y;

    switch (operator){
        case "multiply":
            console.log(multiply(numOne, numTwo));
            break;
        case "divide":
            console.log(divide(numOne, numTwo));
            break;
        case "add":
            console.log(add(numOne, numTwo));
            break;
        case "substract":
            console.log(substract(numOne, numTwo));
            break;
    }
}