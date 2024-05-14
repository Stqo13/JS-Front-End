function solve(input){
    let words = input
        .shift()
        .split(' ')
        .reduce((result, word) => {
            result[word] = 0;

            return result;
        }, {});

    for (const item of input) {
        if (words.hasOwnProperty(item)) {
            words[item]++;
        }
    }

    Object
        .entries(words)
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, occ]) => console.log(`${word} - ${occ}`));
}

solve(['is the sentence', 
    'first', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the',]);