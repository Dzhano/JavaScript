function login(input){
    let username = input[0];
    for (let i = 1; i < input.length; i++){
        let password = "";
        for (let y = input[i].length - 1; y >= 0; y--){
            password += input[i][y];
        }
        if (username == password){
            console.log(`User ${username} logged in.`);
            break;
        } else if (i == 4){
            console.log(`User ${username} blocked!`);
            break;
        } else{
            console.log("Incorrect password. Try again.");
        }
    }
}

// login(['sunny','rainy','cloudy','sunny','not sunny']);