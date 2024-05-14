function solve(password){
    let digits = 0;
    let letterPattern = /[a-z]/i;

    for (const item of password) {
        if (item >= '0' && item <= '9') {
            digits++;
        }
    }

    if (findLength(password.length) !== true) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (consistency(password) !== true){
        console.log('Password must consist only of letters and digits');
    }
    
    if (digitCount(digits) !== true){
        console.log('Password must have at least 2 digits');
    }

    if (findLength(password.length) === true && consistency(password) === true && digitCount(digits) === true){
        console.log('Password is valid');
    }

    function findLength(length){
        if(length < 6 || length > 10){
            return false;
        }

        return true;
    }
    function digitCount(digits){
        if(digits < 2){
            return false;
        }

        return true;
    }
    function consistency(word){
        for (const item of word) {
            if (!(/[a-zA-Z0-9]/).test(item)) {
                return false;
            }
        }

        return true;
    }
}

solve('logIN');