function solve(input){
    let inputArr = input.split(' ');
    let matches = [];

    for (const word of inputArr) {
        if (word.startsWith('#') && word.length >= 2){
            matches = input.matchAll(/\#(?<text>[A-z]+)/g);
        }
    }

    for (const item of matches) {
        console.log(item[1]);
    }
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign');