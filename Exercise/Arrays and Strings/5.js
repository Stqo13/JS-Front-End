function solve(wordsInput, text){
    let words = wordsInput.split(', ');
    let textArr = text.split(' ');

    for (const item of textArr) {
        if (item.startsWith('*')) {
            let word = words.find(x => x.length === item.length)
            text = text.replace(item, word);
        }
    }

    console.log(text);
}

solve('great, learning', 'softuni is ***** place for ******** new programming languages');