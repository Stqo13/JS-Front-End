function operation(first, second, symbol){
    switch (symbol){
        case '+':
            console.log(first+second);
            break;
        case '-':
            console.log(first-second);
            break;
        case '*':
            console.log(first*second);
            break;
        case '/':
            console.log(first/second);
            break;
        case '%':
            console.log(first%second);
            break;
        case '**':
            console.log(first**2);
            break;
    }
}

operation(10, 2, '+');