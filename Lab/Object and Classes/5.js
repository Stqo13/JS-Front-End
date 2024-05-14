function solve(names){
    let phoneBook = {};
    for (const item of names) {
        let info = item.split(' ');
        phoneBook[info[0]] = info[1];
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);