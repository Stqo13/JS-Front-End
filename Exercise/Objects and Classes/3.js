function solve(currentStocks, orders){
    let stocks = {};

    for (let i = 0; i < currentStocks.length; i += 2) {
        stocks[currentStocks[i]] = Number(currentStocks[i + 1]);
    }

    for (let i = 0; i < orders.length; i += 2) {
       if (stocks.hasOwnProperty(orders[i])) {
        stocks[orders[i]] += Number(orders[i + 1]);
       } else{
        stocks[orders[i]] = Number(orders[i + 1]);
       }
    }

    Object.keys(stocks).forEach(item => console.log(`${item} -> ${stocks[item]}`));
}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
      ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);