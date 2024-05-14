function solve(input){
    let inputAsObj = input
        .toLowerCase()
        .split(' ')
        .reduce((result, word) => {
            result[word] = 0;

            return result;
        }, {});

    let inputAsArr = input.split(' ');

    for (const item of inputAsArr) {
        if (inputAsObj.hasOwnProperty(item.toLowerCase())) {
            inputAsObj[item.toLowerCase()]++;
        }
    }

    let oddOccurences = [];

    for (const key in inputAsObj) {
        if (inputAsObj[key] % 2 !== 0) {
            oddOccurences.push(key.toLowerCase());
        }
    }

    console.log(oddOccurences.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');