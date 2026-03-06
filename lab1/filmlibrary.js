"use strict";
const dayjs = require('dayjs')

function Film(filmID, title, favBool, watchDate, rating, userID){
    this.filmID = filmID;
    this.title = title;
    this.favBool = favBool;
    // store watchDate as a dayjs object for reliable comparisons; format only when printing
    this.watchDate = watchDate ? dayjs(watchDate) : null;
    this.rating = rating;
    this.userID = userID;
}

function FilmLibrary(){
    this.films = [];
    this.addNewFilm = function(filmID, title, favBool, watchDate, rating, userID){
        const newFilm = new Film(filmID, title, favBool, watchDate, rating, userID);
        this.films.push(newFilm);
    }
    
    this.sortByRating = function(){
        this.films = this.films.sort((a, b) => b.rating - a.rating);
    }
    this.sortByDate = function(){
        this.films = this.films.sort((a, b) => {
            // place films with no watchDate at the end
            if (a.watchDate === null && b.watchDate === null) return 0;
            if (a.watchDate === null) return 1;
            if (b.watchDate === null) return -1;
            if (a.watchDate.isBefore(b.watchDate)) return -1; // more recent first
            if (a.watchDate.isAfter(b.watchDate)) return 1;
            return 0;
        });
    }
    this.removeFilm = function(filmID){
        this.films = this.films.filter(film => film.filmID !== filmID);
    }
    this.updateRating = function(filmID, newRating){
        this.films.forEach(film => {
            if(film.filmID === filmID){
                film.rating = newRating;
            }
        });
    }
    this.printFilms = function(){
        this.films.forEach(film  => {
            const watchDateStr = film.watchDate ? film.watchDate.format('MMMM, DD, YYYY') : null;
            console.log('ID: ' + film.filmID + ', Title: ' + film.title + ', Favorite: ' + film.favBool + ', Watch Date: ' + watchDateStr + ', Rating: ' + film.rating);
        })
    }
}

let lib = new FilmLibrary();
lib.addNewFilm(1, "The Shawshank Redemption", true, "2020-01-01", 5, 1);
lib.addNewFilm(2, "The Godfather", false, "2020-02-01", 4, 1);
lib.addNewFilm(3, "The Dark Knight", true, "2020-02-01", 5, 1);
lib.addNewFilm(4, "Pulp Fiction", false, "2020-04-01", 4, 1);
lib.addNewFilm(5, "The Lord of the Rings: The Return of the King", true, "2020-05-01", 5, 1);
lib.sortByDate();
lib.updateRating(2, 5);
lib.printFilms();

console.log();