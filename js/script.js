"use strict";

const numberOfFilms = prompt("Сколько фильмов вы посмотрели?", "");

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const   a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколька оцените его?", ""),
        c = prompt("Один из последних просмотренных фильмов?", ""),
        d = prompt("На сколька оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);