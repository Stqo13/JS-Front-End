function solve(input){
    let matches = input.matchAll(/[A-Z][a-z]*/g);
    let inputAsArr = [];

    for (const item of matches) {
        inputAsArr.push(item[0]);
    }

    return inputAsArr.join(', ');
}

console.log(solve('SplitMeIfYouCanHaHaYouCantOrYouCan'));