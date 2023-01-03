function palindromeIntegers(input){
    for (let num of input){
        let palindrome = true;
        let number = num.toString();
        for (let i = 0; i < number.length / 2; i++){
            let n1 = Number(number[i]);
            let n2 = Number(number[number.length - 1 - i]);

            if (n1 != n2){ palindrome = false; }
        }
        console.log(palindrome);
    }
}

// palindromeIntegers([123, 323, 421, 1001]);