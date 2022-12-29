function latin(n){
    for (let i = 0; i < n; i++){
        let letterA = String.fromCharCode(97+i);
        for (let y = 0; y < n; y++){
            let letterB = String.fromCharCode(97+y);
            for (let z = 0; z < n; z++){
                let letterC = String.fromCharCode(97+z);
                console.log(`${letterA}${letterB}${letterC}`);
            }
        }
    }
}