function reverseArray(n, array){
    let newArr = [];
    for (let i = 0; i < n; i++){
        newArr[i] = array[i];
    }

    let output = "";
    for (let i = newArr.length - 1; i >= 0; i--){
        output += `${newArr[i]} `;
    }
    console.log(output);
}

reverseArray(3, [12, 34, 65]);