function solve(m, n){
    let line = "";
    let sum = 0;
    for (let i = m; i <= n; i++){
        line += i + " ";
        sum += i;
    }
    console.log(line);
    console.log("Sum: " + sum);
}