function charactersInRange(c1, c2){
    let result = "";
    let n = c1.charCodeAt();
    let m = c2.charCodeAt();
    if (n > m){
        let r = n;
        n = m;
        m = r;
    }

    for (let i = n + 1; i < m; i++){
        result += String.fromCharCode(i) + " ";
    }
    console.log(result);
}

// charactersInRange('C', '#');