const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);
const price = 200.0


const compose = (...fnc) => (x) => fnc.reduceRight((accum, curr) => curr(accum), x);

const discontPrice = compose(
    normalizePrice,
    divide100,
    multiply20
);
console.log(discontPrice(price));