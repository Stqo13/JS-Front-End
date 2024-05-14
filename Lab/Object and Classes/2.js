function solve(city){
    Object.keys(city)
        .forEach(key => console.log(`${key} -> ${city[key]}`));
}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});