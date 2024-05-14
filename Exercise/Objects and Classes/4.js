function solve(input){
    let movies = [];
    for (const item of input) {
        if (item.includes('addMovie')) {
            let movie = {
                name: item.substring('addMovie'.length + 1)
            };
            
            movies.push(movie);
        }else if(item.includes('directedBy')){
            let [movieName, director] = item.split(' directedBy ');
            let movie = movies.find(m => m.name === movieName);

            if(movies.some(movie => movie.name === movieName)){
                movie.director = director;
            }
        }else if(item.includes('onDate')){
            let [movieName, date] = item.split(' onDate ');
            let movie = movies.find(m => m.name === movieName)

            if (movies.some(movie => movie.name === movieName)) {
                movie.date = date;
            }
        }
    }

    movies
        .filter(movie => movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)))
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);