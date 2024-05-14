function solve() {
    let inputTextElement = document.getElementById('text');
    let inputConventionElement = document.getElementById('naming-convention');
    let resultSpanElement = document.querySelector('.result-container > #result');
    
    let result = '';
    let text = '';
    let resultAsArray = [];
    
    switch (inputConventionElement.value) {
        case 'Pascal Case':
        text = inputTextElement.value;
        resultAsArray = [];
        
        resultAsArray.unshift(text[0].toUpperCase());
        for (let i = 1; i < text.length - 1; i++) {
            if (text[i - 1] == ' ') {
                resultAsArray.splice(i, 0, text[i].toUpperCase());
            }else if(text[i] != ' '){
                resultAsArray.splice(i, 0, text[i].toLowerCase());
            }
        }
        resultAsArray.push(text[text.length - 1].toLowerCase());
        resultAsArray.forEach(ch => result += ch);
        break;
        case 'Camel Case':
        text = inputTextElement.value;
        resultAsArray = [];
        
        resultAsArray.unshift(text[0].toLowerCase());
        for (let i = 1; i < text.length - 1; i++) {
            if (text[i - 1] == ' ') {
                resultAsArray.splice(i, 0, text[i].toUpperCase());
            }else if(text[i] != ' '){
                resultAsArray.splice(i, 0, text[i].toLowerCase());
            }
        }
        resultAsArray.push(text[text.length - 1].toLowerCase());
        resultAsArray.forEach(ch => result += ch);
        break;
        default:
        result += 'Error!';
        break;
    }
    
    resultSpanElement.textContent = result;
}