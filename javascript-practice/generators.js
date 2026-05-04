function* genOne() {
    yield ['a', 'b', 'c'];
}

function* genTwo() {
    yield* ['a', 'b', 'c'];
}

const one = genOne();
const two = genTwo();

console.log(one.next());
console.log(two.next());

console.log(one.next());
console.log(two.next());

console.log(one.next());
console.log(two.next());

console.log(one.next());
console.log(two.next());

