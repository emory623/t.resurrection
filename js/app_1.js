`use strict`;

let numberOfFilms;

for(let i = 0; i < 1; i++){
    numberOfFilms = +prompt('Сколько фильмов ты уже посмотрел?'); //1
    if(numberOfFilms == false || numberOfFilms == '' || numberOfFilms.length > 50){
        --i;
    }
}
const personalMovieDB = { //2
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

for(let i = 0; i < 3; i++){
    const lastMovie = prompt('Один из последних фильмов'), // 3
            markMovie = +prompt('насколько оценишь7');
    if(lastMovie == false || lastMovie == '' || lastMovie >50 || markMovie == false || markMovie == '' || markMovie > 50){
        --i;
    }else{
        personalMovieDB.movies[lastMovie] = markMovie;
    }
}

console.log(personalMovieDB.movies)

// practice 2

if(personalMovieDB.count < 10){
    console.log('malo');
}else if(personalMovieDB.count > 10){
    console.log('normal');
}else if(personalMovieDB.count > 30){
    console.log('wow');
}