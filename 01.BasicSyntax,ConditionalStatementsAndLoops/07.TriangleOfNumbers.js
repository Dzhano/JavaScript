function triangle(n){
    for (let i = 1; i <= n; i++){
        let line = "";
        for (let y = 1; y <= i; y++){
            line += i + " ";
        }
        console.log(line);
    }
}