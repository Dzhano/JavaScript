function special(n){
    for (let i = 1; i <= n; i++){
        let number = i.toString();
        let sum = 0;
        for (let i = 0; i < number.length; i++){
            sum += Number(number[i]);
        }
        
        console.log(sum == 5 || sum == 7 || sum == 11 ? `${i} -> True` : `${i} -> False`);
    }
}