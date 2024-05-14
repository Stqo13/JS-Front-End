function solve(start, end) {
    let array = [];
    let sum = 0;
    for (let index = start; index <= end; index++) {
        array.push(index);
        sum += index;
    }
    console.log(array.join(' '));
    console.log(`Sum: ${sum}`);
}

solve(5, 10);