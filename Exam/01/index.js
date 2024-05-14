function solve(input){
    let n = Number(input.shift());

    let hero = {};
    let heroesPosse = [];

    for (let i = 0; i < n; i++) {
        let heroInfo = input.shift().split(' ');

        let name = heroInfo[0];
        let hp = Number(heroInfo[1]);
        let bullets = Number(heroInfo[2]);

        hero = {
            name,
            hp,
            bullets
        };

        heroesPosse.push(hero);
    }

    let line = input.shift();
    while(line !== 'Ride Off Into Sunset'){
        let commandInfo = line.split(' - ');

        switch (commandInfo[0]) {
            case 'FireShot':
                let firstName = commandInfo[1];
                let firstTarget = commandInfo[2];

                let firstHero = heroesPosse.find(hero => hero.name === firstName);
                if (firstHero.bullets > 0) {
                    firstHero.bullets -= 1;
                    console.log(`${firstName} has successfully hit ${firstTarget} and now has ${firstHero.bullets} bullets!`);
                }else{
                    console.log(`${firstName} doesn't have enough bullets to shoot at ${firstTarget}!`);
                }
                break;
            case 'TakeHit':
                let secondName = commandInfo[1];
                let damage = Number(commandInfo[2]);
                let attacker = commandInfo[3];

                let secondHero = heroesPosse.find(hero => hero.name === secondName);
                secondHero.hp -= damage;
                if (secondHero.hp > 0) {
                    console.log(`${secondName} took a hit for ${damage} HP from ${attacker} and now has ${secondHero.hp} HP!`);
                }else{
                    console.log(`${secondName} was gunned down by ${attacker}!`);
                }
                break;
            case 'Reload':
                let thirdName = commandInfo[1];

                let thirdHero = heroesPosse.find(hero => hero.name === thirdName);
                if (thirdHero.bullets < 6) {
                    let bulletsNeeded = 6 - thirdHero.bullets;
                    thirdHero.bullets += bulletsNeeded;
                    console.log(`${thirdName} reloaded ${bulletsNeeded} bullets!`);
                }else{
                    console.log(`${thirdName}'s pistol is fully loaded!`);
                }
                break;
            case 'PatchUp':
                let fourthName = commandInfo[1];
                let amount = Number(commandInfo[2]);

                let fourthHero = heroesPosse.find(hero => hero.name === fourthName);
                if (fourthHero.hp === 100) {
                    console.log(`${fourthName} is in full health!`);
                }else{
                    let hpNeeded = 100 - fourthHero.hp;
                    fourthHero.hp += amount;
                    if (fourthHero.hp > 100) {
                        fourthHero.hp = 100;
                        console.log(`${fourthName} patched up and recovered ${hpNeeded} HP!`);
                    }
                    console.log(`${fourthName} patched up and recovered ${amount} HP!`);
                }

                break;
        }

        line = input.shift();
    }

    for (const hero of heroesPosse) {
        if (hero.hp > 1) {
            console.log(`${hero.name}`);
            console.log(`HP: ${hero.hp}`);
            console.log(`Bullets: ${hero.bullets}`);
        }
    }
}

solve(['2',
    'Gus 100 0',
    'Walt 100 6',
    'TakeHit - Gus - 80 - Bandit',
    'PatchUp - Gus - 20',
    'Ride Off Into Sunset']);