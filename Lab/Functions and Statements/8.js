function solve(number){
    function allDivisors(number){
        let divisors = [];

        for (let i = 1; i < number; i++) {
            if(number % i === 0){
                divisors.push(i);
            }
        }

        return divisors;
    }

    function divisorSum(divisors){
        let sum = 0;

        for (const item of divisors) {
            sum += item;
        }
        
        return sum;
    }

    if (number === divisorSum(allDivisors(number))) {
        console.log('We have a perfect number!');
    }else{
        console.log('It\'s not so perfect.');
    }
}

solve(6);