'use strict';

const checkbox = document.querySelector('#checkbox'),
    btnColor = document.querySelector('#color'),
    form = document.querySelector('form');

if (localStorage.getItem('isChecked') === 'true') {
    checkbox.checked = true;
}

if (localStorage.getItem('curColorForm')) {
    form.style.backgroundColor = 'red'
}

checkbox.addEventListener('change', () => {
    //checkbox.checked == 'true';
    localStorage.setItem('isChecked', `${checkbox.checked}`);
});

btnColor.addEventListener('click', () => {
    if (localStorage.getItem('curColorForm')) {
        localStorage.removeItem('curColorForm');
        form.style.backgroundColor = '#fff'
    } else {
        localStorage.setItem('curColorForm', 'changed');
        form.style.backgroundColor = 'red'
    }

});


//for object

const persone = {
    name: 'Alex',
    age: 25
}

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('persone', serializedPersone);
console.log(persone);
console.log(JSON.stringify(persone));
console.log(JSON.parse(localStorage.getItem('persone')));