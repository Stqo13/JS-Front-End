function solve(number){
    let evenSum = 0;
    let oddSum = 0;

    let numAsString = number.toString();

    for (const item of numAsString) {
        let digit = parseInt(item);

        if(digit % 2 === 0){
            evenSum+=digit;
        }else{
            oddSum+=digit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);