function solve(num){
    let number = num.toString();
    let sum = 0;
    for (let i = 0; i < number.length; i++){
        sum += Number(number[i]);
    }

    console.log(sum.toString().includes('9') ? `${num} Amazing? True` : `${num} Amazing? False`);
}