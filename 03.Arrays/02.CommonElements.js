function commonElementsInArray(array1, array2){
    for (let element of array1){
        for (let object of array2){
            if (element === object){
                console.log(element);
            }
        }
    }
}

// commonElementsInArray(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);