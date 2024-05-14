function digitCheck(number){
    let numAsString = number.toString();
    let firstDigit = numAsString[0];
    let count = 0;
    for (let index = 0; index < numAsString.length; index++) {
        if (numAsString[index] == firstDigit) {
            count++;
        }
    }
    if (count == numAsString.length) {
        console.log('true');
    }else{
        console.log('false');
    }

    let sum = 0;
    while(number > 0){
        let digit = number % 10;
        sum += digit;
        number = Math.floor(number / 10);
    }
    console.log(sum);
}

