function solve(input){
    let heroes = [];

    for (const item of input) {
        let [name, level, items] = item.split(' / ');

        let hero = {
            name,
            level: Number(level),
            items,
        };

        heroes.push(hero);
    }

    heroes
        .sort((a, b) => a.level - b.level)
        .forEach(hero => {
            console.log(`Hero: ${hero.name}`);
            console.log(`level => ${hero.level}`);
            console.log(`items => ${hero.items}`);
        });
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);