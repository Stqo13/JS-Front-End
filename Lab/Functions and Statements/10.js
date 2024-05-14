function solve(first, second){
    function findFactorial(number){
        let factorial = 1;

        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }

        return factorial;
    }

    let firstFactorial = findFactorial(first);
    let secondFactorial = findFactorial(second);

    console.log((firstFactorial / secondFactorial).toFixed(2));
}

solve(5, 2);