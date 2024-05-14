function solve(input){
    for (const item of input) {
        let townInfo = item.split(' | ');

        let townAsObject = {
            town: townInfo[0],
            latitude: Number(townInfo[1]).toFixed(2),
            longitude: Number(townInfo[2]).toFixed(2),
        }

        console.log(townAsObject);
    }
}

solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);