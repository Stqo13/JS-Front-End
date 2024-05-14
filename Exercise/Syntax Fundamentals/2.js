function priceSolve(group, type, day){

    if (type == 'Students' && group >= 30) {
        if (day == 'Friday') {
            let price = group * 8.45;
            let final = price - price * 0.15;
            console.log(`Total price: ${final.toFixed(2)}`);
        }else if(day == 'Saturday'){
            let price = group * 9.8;
            let final = price - price * 0.15;
            console.log(`Total price: ${final.toFixed(2)}`);
        }else if(day == 'Sunday'){
            let price = group * 10.46;
            let final = price - price * 0.15;
            console.log(`Total price: ${final.toFixed(2)}`);
        }
    }else if (type == 'Students') {
        if (day == 'Friday') {
            let price = group * 8.45;
            console.log(`Total price: ${price.toFixed(2)}`);
        }else if(day == 'Saturday'){
            let price = group * 9.8;
            console.log(`Total price: ${price.toFixed(2)}`);
        }else if(day == 'Sunday'){
            let price = group * 10.46;
            console.log(`Total price: ${price.toFixed(2)}`);
        }
    }

    if (type == 'Business' && group >= 100) {
        if (day == 'Friday') {
            let price = (group - 10) * 10.9;
            console.log(`Total price: ${price.toFixed(2)}`);
        }else if (day == 'Saturday') {
            let price = (group - 10) * 15.6;
            console.log(`Total price: ${price.toFixed(2)}`);
        }else if (day == 'Sunday') {
            let price = (group - 10) * 16;
            console.log(`Total price: ${price.toFixed(2)}`);
        }
    }else if (type == 'Business') {
        if (day == 'Friday') {
            let price = group * 10.9;
            console.log(`Total price: ${price.toFixed(2)}`);
        }else if (day == 'Saturday') {
            let price = group * 15.6;
            console.log(`Total price: ${price.toFixed(2)}`);
        }else if (day == 'Sunday') {
            let price = group * 16;
            console.log(`Total price: ${price.toFixed(2)}`);
        }
    }

    if (type == 'Regular' && (group >= 10 && group <= 20)) {
        if (day == 'Friday') {
            let price = group * 15;
            let final = price - price * 0.05;
            console.log(`Total price: ${final.toFixed(2)}`);
        }else if (day == 'Saturday') {
            let price = group * 20;
            let final = price - price * 0.05;
            console.log(`Total price: ${final.toFixed(2)}`);
        }else if (day == 'Sunday') {
            let price = group * 22.5;
            let final = price - price * 0.05;
            console.log(`Total price: ${final.toFixed(2)}`);
        }
    }else if (type == 'Regular') {
        if (day == 'Friday') {
            let price = group * 15;
            console.log(`Total price: ${price.toFixed(2)}`);
        }else if (day == 'Saturday') {
            let price = group * 20;
            console.log(`Total price: ${price.toFixed(2)}`);
        }else if (day == 'Sunday') {
            let price = group * 22.5;
            console.log(`Total price: ${price.toFixed(2)}`);
        }
    }
}

priceSolve(30, 'Students', 'Sunday');
priceSolve(40, 'Regular', 'Saturday');