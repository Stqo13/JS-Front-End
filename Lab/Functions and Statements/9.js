function solve(number){
    let repetions = number / 10;
    let loadingBar = [];

    if(number === 100){
        console.log(`${number}\% Complete!`);
    }

    loadingBar.push('[')

    for (let index = 0; index < repetions; index++) {
        loadingBar.push('%');   
    }

    for (let i = repetions; i < 10; i++) {
        loadingBar.push('.');
    }
    
    loadingBar.push(']')

    console.log(`${number}\% ` + loadingBar.join(''));
    if (number !== 100) {
        console.log('Still loading...');
    }
}

solve(30);