function smallest(n1, n2, n3){
    let number = n1;
    if (n1 < n2 && n1 < n3){
        number = n1;
    } else if (n2 < n1 && n2 < n3){
        number = n2;
    } else if (n3 < n1 && n3 < n2){
        number = n3;
    }
    console.log(number);
}