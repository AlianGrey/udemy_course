'use strict';

// 1
/* function showThis() {
    console.log(this);
}
showThis(); */

// 1
/* function showThis2(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;  //замыкание функций берёт из функции выше эти переменные и замыкает их на себя
    }
    console.log(sum());
}

showThis2(2, 3); */

// 2
const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);
        return this.a + this.b;
    }

};

obj.sum();

// 2
const obj2 = {
    a: 20,
    b: 15,
    sum: function () {
        function shout() {
            console.log(this); //нет контекста у этой функции , так как она берёт его из верхней функции а она его не передаёт
            // это пример с 1 варианта
            //это уже не метод объекта - это простая функция а у неё контекст всегда undefined
        }
        shout();
    }

};

obj2.sum();


// 3
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        return `Hello ${this.name}!`
    }
}

const ivan = new User('Ivan', 28);
console.log(ivan.hello());

// 5
//если function arrow ()=>{} - то она берёт this из ствоего родителя, у неё нет своего контекста вызова
const obj3 = {
    num: 30,
    sayHello: function () {
        const say = () => { //стрел функция взяла контекст из родителя. Если была бы обычная, то было Undefined
            console.log(this);
            console.log(this.num);
        }
        say();
    }
}

obj3.sayHello();



// 4
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user3 = {
    name: 'Ivan'
}

sayName.call(user3, 'Smith');  //устанавливаем вручную контекст для функции
sayName.apply(user3, ['smith']); //устанавливаем вручную контекст для функции, отличие принимает массив в качествое доп параметров

//bind создаёт новую функцию сос своим контекстом и различными параметрами
function count(num) {
    console.log(`${this} * ${num} = ${this * num}`);
    return this * num;
}

const double = count.bind(2);  //создаем новую функцию и передаём контекст в неё - 2
console.log(double(3));  //передаём параметры для новой функции num = 3
console.log(double(13));  //передаём параметры для новой функции num = 13

/* 1) Обычная функция: this = window, но если 'use strict' то будет undefined
2) Контекст у методов объекта = сам объект
3) this в конструкторах и классах - это новый экземпляр объекта
4) РУчная привязка This: call, apply, bind
5) у стрелочных функцияй нет своего контекста вызова, их this = контексту вызова родителя
6) контекст для обработчика событий может взять только обычная f, если будет стр f то будет undefined
*/

// 6
//контекст для обработчика события
//если function declaration - контекст this = ivent.target
const btn = document.querySelector('button');

btn.addEventListener('click', function (e) {
    console.log(this);
    // this.style.backgroundColor = 'red';
    e.target.style.backgroundColor = 'green'; // одно и тоже что и this = event.target
});

btn.addEventListener('click', () => {
    console.log(this);    //будет undefined из-за стр f, контекст поеряется
});


//стрел функции для сокращения придуманы иллюстрация
const double4 = (a) => {
    return a * 2;
}
console.log(double4(4));

const double5 = (a) => a * 2;  // если тело f помещается в 1 строку, то можно без {} и без return
console.log(double5(4));

const double6 = a => a * 2; //если параметр 1, то можно без скобок в параметрах
console.log(double6(4));

const double7 = (a, b) => a * b;  // если параметра 2 и более,то скобки нужны
console.log(double7(4, 4));



//sample

'use strict'; //Без стрикта будет ошибка, с ним undefined и 9

function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }

    console.log(sum());
}

getSum(4, 5);


