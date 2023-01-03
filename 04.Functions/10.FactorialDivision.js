function factorial(n, m){
    let num1 = 1;
    for (let i = 1; i <= n; i++){
        num1 *= i;
    }
    let num2 = 1;
    for (let i = 1; i <= m; i++){
        num2 *= i;
    }

    return (num1 / num2).toFixed(2);
}

// console.log(factorial(5, 2));