function solve(jsonData){
    let originalObject = JSON.parse(jsonData)

    Object.keys(originalObject)
    .forEach(key => console.log(`${key}: ${originalObject[key]}`))
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');