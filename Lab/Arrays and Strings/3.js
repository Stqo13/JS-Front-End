function solve(input) {
    let even = [];
    let odd = [];

    let evenSum = 0;
    let oddSum = 0;

    for (let index = 0; index < input.length; index++) {
        if (input[index] % 2 === 0) {
            even.push(input[index]);
            evenSum+=input[index];
        }else {
            odd.push(input[index]);
            oddSum+=input[index];
        }
    }

    console.log(evenSum - oddSum);
}

solve([1, 2, 3, 4, 5, 6]);