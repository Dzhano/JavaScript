function matchPhoneNumber(phoneNumbers) {
    let pattern = /(?<!\d)\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let validNumbers = [];
    while ((validPhone = pattern.exec(phoneNumbers)) !== null) {
        validNumbers.push(validPhone[0]);
    }

    console.log(validNumbers.join(', '));
}

// matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);