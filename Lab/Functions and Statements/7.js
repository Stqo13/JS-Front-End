function solve(number){
    for (let i = 0; i < number; i++) {
        let arr = [];
        for (let j = 0; j < number; j++) {
            arr.push(number);
        }
        console.log(arr.join(' '));
    }
}

solve(3);