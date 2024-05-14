function solve(input){
    let addressBook = {};

    for (const item of input) {
        let info = item.split(':');

        addressBook[info[0]] = info[1];
    }

    let sortedArray = Object
        .entries(addressBook)
        .sort(([key1, value1], [key2, value2]) => key1.localeCompare(key2));

    sortedArray.forEach(kvp => console.log(`${kvp[0]} -> ${kvp[1]}`));
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);