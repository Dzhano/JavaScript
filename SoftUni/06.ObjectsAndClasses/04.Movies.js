function solve(input){
    let movies = [];
    for (let data of input){
        let info;
        if (data.includes("addMovie")){
            info = data.split(" ");
            info.shift();
            movies.push({name: info.join(" ")});
        }
        else if (data.includes("directedBy")){
            info = data.split(" directedBy ");
            let index = movies.findIndex(x => x.name == info[0]);
            if (index !== -1){
                movies[index].director = info[1];
            }
        }
        else if (data.includes("onDate")){
            info = data.split(" onDate ");
            let index = movies.findIndex(x => x.name == info[0]);
            if (index !== -1){
                movies[index].date = info[1];
            }
        }
    }
    
    for (let movie of movies){
        if (Object.keys(movie).includes("director") && Object.keys(movie).includes("date")) { 
            console.log(JSON.stringify(movie)) 
        }
    }
}

/*solve([ 'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen']);

solve(['addMovie The Avengers',
'addMovie Superman',
'The Avengers directedBy Anthony Russo',
'The Avengers onDate 30.07.2010',
'Captain America onDate 30.07.2010',
'Captain America directedBy Joe Russo']);*/