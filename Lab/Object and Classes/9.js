function solve(input){
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let n = input.shift();
    let type = input.pop();
    let songs = [];

    for (const item of input) {
        let songInfo = item.split('_');
        songs.push(new Song(songInfo[0], songInfo[1], songInfo[2]));
    }

    if (type === 'all') {
        songs.forEach(x => console.log(x.name));
    }else{
        let filtered = songs.filter(x => x.typeList === type);
        filtered.forEach(x => console.log(x.name));
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);