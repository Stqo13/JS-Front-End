function iAmCooking(food, commOne, commTwo, commThree, commFour, commFive){
    let number = Number(food);
    let operations = [];
    operations.push(commOne, commTwo, commThree, commFour, commFive);

    for (let index = 0; index < operations.length; index++) {
        switch (operations[index]) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number*=3;
                break;
            case 'fillet':
                number -= number*0.2;
                break;
        }
        console.log(number);
    }
}

iAmCooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');