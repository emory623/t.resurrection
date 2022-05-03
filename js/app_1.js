`use strict`;

const numberOfFilms = +prompt('Сколько фильмов ты уже посмотрел?'); //1

const personalMovieDB = { //2
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

for(let i = 0; i < 2; i++){
    const lastMovie = prompt('Один из последних фильмов'), // 3
            markMovie = +prompt('насколько оценишь7');
    
    personalMovieDB.movies[lastMovie] = markMovie;
}

console.log(personalMovieDB.movies)