//////////////////////   1    /////////////////////////////////////////////
/* combineUrls('https', 'mysite.com');

const combineUrls = (protocol, domain) => {
    return `${protocol}://${domain}`;
}
 */
//////////////////////   2    /////////////////////////////////////////////
//Какого метода не существует у свойства classList?
/* classList.remuve();
classList.contains();
classList.includes();  -----
classList.toggel();
 */


//////////////////////   3    /////////////////////////////////////////////
//Микрозадачи в событийном цикле - это...
//промисы и await 
//промисы then / catch / finally

//////////////////////   4    /////////////////////////////////////////////
//Какой из методов безопаснее всего использовать, если мы четко хотим получить от пользователя текст и использовать его дальше?
//textContent


//////////////////////   5    /////////////////////////////////////////////
//Что такое объект события?  event
//Объект содержит всю инфу о произошедшем


//////////////////////   6    /////////////////////////////////////////////
//Какие из методов массивов возвращают новый массив в результате своей работы?
//filter, map, slice, concat, flat


//////////////////////   7    /////////////////////////////////////////////
//Что будет выведено в консоль?

if (0) {
    console.log('first')
} else if (NaN) {
    console.log('second');
} else if (' ') {
    console.log('third');
} else if (null) {
    console.log('fourth');
}


//////////////////////   8    /////////////////////////////////////////////
//Какой формат экспорта/импорта ES6 модулей в JS записан синтаксически правильно?     


//////////////////////   9    /////////////////////////////////////////////
//Что будет результатом выполнения этого кода на странице?

const msg = 'Заявка №231';

const div = document.createElement('div');
div.style.background = 'red';
div.setAttribute('data-msg', true);
//div.textContent(msg);   ///будет ошибка надо  div.texContent =  `${msg}`;
div.texContent = `${msg}`;

document.body.append(div);



//////////////////////   10    /////////////////////////////////////////////
//Что будет содержаться в переменной result после завершения кода?

function foo(a, b) {
    const [first, second] = a;
    const { eng, ru } = b;

    return `${second}, ${ru}`;
}
const result = foo(['Hello', 'Привет'], { ru: 'Мир', eng: 'World' });
console.log(result);

//////////////////////   11    /////////////////////////////////////////////
//Какое значение будет выведено в консоль при выполнении этого кода?

let c = 4;
function addX(x) {
    return function (n) {
        return n + x
    }
}

const addThree = addX(3);   // будет   function(n) {  return n + 3  }
console.log(addThree);

let d = addThree(c);   // уже в новую результирующую функцию подставляем с=4 = т 
console.log(d);   // Никак Не влияет на функцию и на переменную Res

let res = addThree(c);  // уже в новую результирующую функцию подставляем с=4 = т 
// будет   function(4) {  return 4 + 3  }

console.log(res);


//////////////////////   12    /////////////////////////////////////////////
//Какой из команд можно создать элемент на странице?
document.createEvent('div');


//////////////////////   13    /////////////////////////////////////////////
//Какая основная проблема этого кода?

async function makeRequest() {
    return await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(json => console.log(json))
}

makeRequest();
//нет преобразования ответа из json  в формат обычного объекта
async function makeRequest() {
    return await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

makeRequest()


//////////////////////   14    /////////////////////////////////////////////
//Как отменить стандартное поведение браузера при работе со ссылками, формами и тп?
event.preventDefault();


//////////////////////   15   /////////////////////////////////////////////
//У вас есть функция, которая скрывает номер телефона и имя пользователя до определенного действия. Эта функция выглядит вот так:

const msg1 = 'My number +12345678, name: Oleg';

function transformMsg(str) {
    // Пропущенная часть
    let a = str.replace(/\+\d{8}/, "*****");
    let b = a.replace(/\w{4}:\s\w{1,}/, "hidden");
    return b;
}

console.log(transformMsg(msg1));

//////////////////////   16   /////////////////////////////////////////////
//Какой результат даст этот код?

console.log(0 || 1);
console.log(0 && 1);
console.log(0 || NaN || false || null);

//////////////////////   17   /////////////////////////////////////////////
//Что будет выведено в консоль в результате работы функции?

function setOptions(height, width, ...additional) {
    console.log(height, width, ...additional)
}
setOptions(400, 500, 'red', 'top');

//////////////////////   18   /////////////////////////////////////////////
//Что будет содержаться в переменной result в результате работы кода?

const arr = [
    {
        name: 'Alex',
        salary: 500
    },
    {
        name: 'Ann',
        salary: 1500
    },
    {
        name: 'John',
        salary: 2500
    },
];

const result1 = arr.map(item => Object.entries(item)[1][1]).reduce((sum, curr) => sum + curr)
console.log(result1)

//////////////////////   19   /////////////////////////////////////////////
//Что выведет этот код:

let y = 1;
let x = y = 2;
console.log(x);

//////////////////////   20   /////////////////////////////////////////////
a = [1, 2, 3]; b = [1, 2, 3];
console.log(a === b);
//Правда ли что a == b ?

//////////////////////   21   /////////////////////////////////////////////
//Event loop - это...
//механизм контроля очередей, функций, таймаутов, колбыков и др асинхр операций


//////////////////////   22   /////////////////////////////////////////////
//Как называется прием из кода ниже?
//деструктуризация
const user = {
    name: 'Alex',
    age: 25
}
const { name, age } = user;
//деструктуризация объекта

//////////////////////   23   /////////////////////////////////////////////
//Что выведет в консоль данный код?

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 1000);
    setTimeout(() => {
        reject('bar');
    }, 900);
});

promise.then((value) => {
    console.log(value);
}).catch((e) => console.log(e))


//////////////////////   24   /////////////////////////////////////////////
//Код ниже работает без ошибки. Но опытный разработчик считает его плохим. В чем причина?

const price = 500;
const money = 400;

switch (true) {
    case price > money:
        console.log('Мне не хватает денег');
    case price < money:
        console.log('Мне хватает денег!');
}
// всё и отсутствие Break, default, в сравнении дб чткое равенство

//////////////////////   25   /////////////////////////////////////////////
//Как правильно задать наследование одного класса от другого?
class Slider extends Element { }

//////////////////////   26   /////////////////////////////////////////////
//Какой итоговый результат мы получим в консоли, если запустить этот код?
const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function one() {
    const promises = [a(), b(), c()];
    const [outpu1, outpu2, outpu3] = await Promise.all(promises);
    return `one is done: ${outpu1} ${outpu2} ${outpu3}`;
}

async function two() {
    const promises = [a(), b(), c()];
    const outpu1 = await Promise.race(promises);
    return `two is done: ${outpu1}`;
}

async function three() {
    const outpu1 = await a();
    const outpu2 = await b();
    const outpu3 = await c();
    return `three is done: ${outpu1} ${outpu2} ${outpu3}`
}

one().then(console.log);
two().then(console.log);
three().then(console.log);


//////////////////////   27   /////////////////////////////////////////////
//Какой из вариантов получения этого элемента со страницы будет правильным?

<div id="hi">Hello</div>
document.querySelector('#id');


//////////////////////   28   /////////////////////////////////////////////
//Сколько аргументов может быть у функции?
//сколько угодно



//////////////////////   29   /////////////////////////////////////////////
//Что будет выведено в консоль в результате работы функции?

'use strict';

function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }

    console.log(sum());
}

getSum(4, 5);
//с use strict будет ошибка, бех undefined и 9


//////////////////////   30   /////////////////////////////////////////////
//Какой командой можно удалить элемент со страницы?
div.remove();