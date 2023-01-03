function matrix(n){
    let result = "";
    for (let i = 0; i < n; i++){
        for (let y = 0; y < n; y++){
            result += n + " ";
        }
        result += '\n';
    }

    console.log(result);
}

// matrix(6);