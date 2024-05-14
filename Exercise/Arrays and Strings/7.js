function solve(word, text){
    let words = text.toLowerCase().split(' ');

    if(words.includes(word.toLowerCase())){
        return word;
    }

    return `${word} not found!`;
}

console.log(solve('java', 'JavaScript is the best programming language'));