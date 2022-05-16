`use strict`;

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов ты уже посмотрел?');
    while(numberOfFilms == false || numberOfFilms == '' || numberOfFilms.length > 50 || isNaN(numberOfFilms)){
            numberOfFilms = +prompt('Сколько фильмов ты уже посмотрел?');
    }
}

// start();

const personalMovieDB = { //2
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

function rememberMyFilms(){
    for(let i = 0; i < 3; i++){
        const lastMovie = prompt('Один из последних фильмов'), // 3
                markMovie = +prompt('насколько оценишь7');
        if(lastMovie == false || lastMovie == '' || lastMovie >50 || markMovie == false || markMovie == '' || markMovie > 50){
            --i;
        }else{
            personalMovieDB.movies[lastMovie] = markMovie;
        }
    }
}

// console.log(personalMovieDB.movies)
// rememberMyFilms();

// practice 2

function detectPersonalLvl(){
    if(personalMovieDB.count < 10){
        console.log('malo');
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('normal');
    }else if(personalMovieDB.count > 30){
        console.log('wow');
    }
}

detectPersonalLvl();

function showMyDB(){
    if(personalMovieDB.private == false){
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        const count = prompt(`write your favorite genre #${i+1}`)
        if(count == false || count == '' || typeof(count) == 'number' || count == null){
            --i;
        }else{
            personalMovieDB.genres[i] = count;
        }
    }
}

writeYourGenres();
console.log(personalMovieDB.genres);
