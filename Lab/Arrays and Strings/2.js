function solve(number, input) {
    let result = [];
    for (let index = 1; index <= number; index++) {
        result.push(input[number - index]);
    }
    console.log(result.join(' '));
}

solve(3, [10, 20, 30, 40, 50, 60]);