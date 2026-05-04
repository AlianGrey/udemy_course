'use strict';

const num = new Number(4);
console.log(num);

const num1 = new Function(4);
console.log(num1);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`)
    };
}

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} вышел`)
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 32);

console.log(ivan);
console.log(alex);
ivan.hello();
alex.hello();
ivan.exit();

