function solve(input, bannedWord){
    let censored = '';
    for (let i = 0; i < bannedWord.length; i++) {
        censored+='*';
    }

    let result = input.replace(bannedWord, censored);
    while(result.includes(bannedWord)){
         result = result.replace(bannedWord, censored);
    }
    console.log(result);
}

solve('A small sentence with some small words', 'small');