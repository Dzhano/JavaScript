function loadingBar(input){
    let loaded = input / 10;
    if (loaded == 10){
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    }
    else{
        let procents = "[";
        for (let i = 0; i < loaded; i++){
            procents += '%';
        }
        for (let y = loaded; y < 10; y++){
            procents += '.';
        }
        procents += "]";

        console.log(`${input}% ${procents}`);
        console.log("Still loading...");
    }
}

// loadingBar(100);