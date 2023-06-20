'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < personalMovieDB.count; i++) {

            const a = prompt("Один из последних просмотренных фильмов?", '').trim(),
                b = prompt("На сколько оцените его?", '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                personalMovieDB.writeYourGenres();
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        }
        else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        }
        else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        }
        else {
            console.log('Произошла ошибка');
        };
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.privat == true ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre == null || genre == '') {
                console.log('Некорректный данные')
                i--;
            }
            else { personalMovieDB.genres[i - 1] = genre; }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр № ${i + 1} - это ${item}`);
        });
    },

    writeYourGenres1: function () {
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            if (genres == null || genres == '') {
                console.log('Некорректный данные')
                i--;
            }
            else {
                personalMovieDB.genres = genres.split(',');
                personalMovieDB.genres.sort();
            }
        }


        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр № ${i + 1} - это ${item}`);
        });

    }
};

personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB.privat);

