/* Write own function bind like this */

/* function logPersone() {
    return `Persone: ${this.name}, ${this.age} age, work as ${this.job}`;
}

const persone1 = { name: 'Alex', age: 25, job: 'frontend' };
const persone2 = { name: 'Elena', age: 23, job: 'smm' };

console.group('----------------------bind method----------------------');
//bind create new function those after need run
//the bind function creates a new function to be called later
console.log(logPersone.bind(persone1)());
console.log(logPersone.bind(persone2)());
console.groupEnd();

console.group('----------------------call method----------------------');
//call & apply call function imediately
//write parameters throw comma
console.log(logPersone.call(persone1));
console.log(logPersone.call(persone2));
console.groupEnd();

console.group('----------------------apply method----------------------');
//apply parameters throw array
console.log(logPersone.apply(persone1));
console.log(logPersone.apply(persone2));
console.groupEnd();
 */

/* something like this must be created
bind(persone1, logPersone);
bind(persone2, logPersone); */



function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args);
    }
}

function logPerson() {
    console.log(`Persone: ${this.name}, ${this.age} age, work as ${this.job}, id = ${this.id}`);
};

const persone1 = { name: 'Alex', age: 25, job: 'frontend', id: '1' };
const persone2 = { name: 'Elena', age: 23, job: 'smm', id: '2' };

bind(persone1, logPerson)();
bind(persone2, logPerson)();

