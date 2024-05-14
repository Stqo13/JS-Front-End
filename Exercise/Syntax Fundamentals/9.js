function print (product, weight, price){
    let kilograms = weight / 1000;
    let final = price*kilograms;
    console.log(`I need \$${final.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${product}.`);
}

print('orange', 2500, 1.80);