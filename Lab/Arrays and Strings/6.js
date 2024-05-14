function solve(input, word){
    let count = 0;
    let stringAsArr = input.split(' ');

    for (const iterator of stringAsArr) {
        if (iterator === word){
            count++;
        }
    }

    console.log(count);
}

solve('This is a word and it also is a sentence', 'is');