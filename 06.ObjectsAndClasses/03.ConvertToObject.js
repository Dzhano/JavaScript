function convertToObject(jsojnStr){
    let person = JSON.parse(jsojnStr);
    for (let key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`);
    }
}