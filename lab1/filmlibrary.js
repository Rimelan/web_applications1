"use strict";
const dayjs = require('dayjs')

function Film(filmID, title, favBool, watchDate, rating, userID){
    this.filmID = filmID;
    this.title = title;
    this.favBool = false;
    this.watchDate = dayjs(watchDate).format('MMMM,DD,YYYY');
    this.rating;
    this.userID;
}

function FilmLibrary(){
    this.films = [];
    this.addNewFilm = function(filmID, title, favBool, watchDate, rating, userID){
        const newFilm = new Film(filmID, title, favBool, watchDate, rating, userID);
        this.films.push(newFilm);
    }
}

let lib = new FilmLibrary();
lib.addNewFilm(1, "The Shawshank Redemption", true, "2020-01-01", 5, 1);
lib.addNewFilm(2, "The Godfather", false, "2020-02-01", 4, 1);
lib.addNewFilm(3, "The Dark Knight", true, null, 5, 1);
lib.addNewFilm(4, "Pulp Fiction", false, "2020-04-01", 4, 1);
lib.addNewFilm(5, "The Lord of the Rings: The Return of the King", true, "2020-05-01", 5, 1);

console.log(lib.films);

console.log();