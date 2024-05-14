function solve(arrOfNumbers){
    for (const item of arrOfNumbers) {
        if(palindromeCheck(item) == true){
            console.log('true');
        }else if(palindromeCheck(item) == false){
            console.log('false');
        }
    }

    function palindromeCheck(number){
        let numAsString = number.toString();
        let result = '';

        for (let i = numAsString.length - 1; i >= 0; i--) {
            result+=numAsString[i];
        }

        if(numAsString === result){
            return true;
        }

        return false;
    }
}

solve([123,323,421,121]);