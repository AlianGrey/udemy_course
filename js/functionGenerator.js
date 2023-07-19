'use strict';

/* function* generator() {
    yield 'S';
    yield 'c';
    yield 'r';
    yield 'i';
    yield 'p';
    yield 't';
}

const str = generator();
console.log(str.next().value);
console.log(str.next()); 
console.log(str.next()); 
console.log(str.next()); 
console.log(str.next()); 
console.log(str.next()); 
console.log(str.next()); */

function* generatorLoop(num) {
    for (let i = 0; i < num; i++) {
        yield i;
    }
}

for (let j of generatorLoop(7)) {
    console.log(j);
}

/* const counter = generatorLoop(5);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value); */