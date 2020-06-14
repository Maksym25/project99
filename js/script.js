"use strict";

const numberOfFilms = prompt("Сколько фильмов вы посмотрели?");

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};