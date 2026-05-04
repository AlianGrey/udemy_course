'use strict';
//json - js object notation

const persone = {
    name: 'Alex',
    tel: '+7444444444444',
    parents: {
        mom: 'Olga',
        dad: "Ivan"
    }
};
console.log(JSON.parse(JSON.stringify(persone)));

//Глубокое клонирование объекта
const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = 'Lena';
console.log(persone);
console.log(clone);