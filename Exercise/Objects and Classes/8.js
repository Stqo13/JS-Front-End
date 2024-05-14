function solve(input){
    let parking = new Set();

    for (const item of input) {
        let [direction, car] = item.split(', ');

        if (direction === 'IN') {
            parking.add(car);
        }else {
            parking.delete(car);
        }
    }
    if (parking.size < 1) {
        console.log("Parking Lot is Empty");
    }

    Array
        .from(parking.values())
        .sort((a, b) => a.localeCompare(b))
        .forEach(car => console.log(car));
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);