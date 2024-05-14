function solve(input){
    let people = [];
    for (const item of input) {
        let personObject = {
            name: item,
            number: item.length
        }

        people.push(personObject);
    }

    people.forEach(person => console.log(`Name: ${person.name} -- Personal Number: ${person.number}`))
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);