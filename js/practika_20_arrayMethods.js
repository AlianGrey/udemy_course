'use strict';
const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

/* function showGoodFilms(arr) {
    return arr.filter(item => item.rating >= 8;);
    //console.log(goodFilms);
    //return goodFilms;
}
showGoodFilms(films); */


function showListOfFilms(arr) {
    return arr.reduce((acum, item) => { //впервый проход accum - это объект и мы берём оттуда Name, в остальные разы это будет уже строка с названиями и берём просто эту строку
        console.log(acum, item);
        return `${typeof (acum) == 'object' ? acum.name : acum}, ${item.name}`;
    });
}

/* function showListOfFilms2(arr) {
    return films.map(elem => elem.name).join(', ');
} */

console.log(showListOfFilms(films));



/* function setFilmsIds(arr) {
    let filmsID = arr.map((item, num, arr) => {
        item.id = num;
        return item;
    });
    //console.log(filmsID);
    return filmsID;
}
//setFilmsIds(films); 

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(item => {
        return typeof (item.id) != 'undefined';
    });
}

// При срабатывании every на первом фильме он натыкается на id = 0;
// 0 - это неправда в логическом ключе, поэтому и весь метод возвращает false
// Учитывайте этот момент
function checkFilms2(arr) {
    return arr.every(film => film.id || film.id === 0 ? true : false)
}

console.log(checkFilms(tranformedArray)); */