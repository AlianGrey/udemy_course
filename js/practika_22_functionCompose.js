const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);
const x = 200;


// const compose = (a, b, c) => (x) => a(b(c(x)));
/* const discount = normalizePrice(divide100(multiply20(200))); //стандартная рабочая, но фикс функции и их количество
console.log(discount); */

///////////////    by steps ///////////////////////////////////////////////////////////////////////////////

const res = [multiply20].reduceRight(function (res, f) { return f(res) }, 200)
console.log(res);

const res1 = [divide100, multiply20].reduceRight((res, f) => f(res), 200)
console.log(res1);

// 1 step:      accum = initial value = x = 200        curr = multiply20        multiply20 ( x )
// 2 step:      accum = multiply20 (x)                 curr = divide100         divide100( multiply20 (x) )
// 3 step:      accum = divide100(multiply20 (x))      curr = normalizePrice    normalizePrice( divide100( multiply20 (x) ) )
const res2 = [normalizePrice, divide100, multiply20].reduceRight((accum, curr) => curr(accum), 200)
console.log(res2);

//////////////////////////////////////////////////////////////////////////////////////////////

const compose1 =
    (...fns) =>
        (x) =>
            fns.reduceRight((accum, curr) => curr(accum), x);

const compose = (...fns) => (x) => fns.reduceRight((accum, curr) => curr(accum), x);

console.log(`Simple:   ${compose(normalizePrice, divide100, multiply20)(200.0)}`);

//////////////////////////////////////////////////////////////////////////////////////////////

const addPrefix = (price) => "$ " + String(price); //$ 40.00
const discountPrice = compose(
    addPrefix,
    normalizePrice,
    divide100,
    multiply20
);

console.log(`With prefix:   ${discountPrice(200.0)}`);

//////////////////////////////////////////////////////////////////////////////////////////////

const composeWithArgs = (...fns) => fns.reduceRight((accum, curr) => (...args) => curr(accum(...args)));

const discountPriceWithArgs = composeWithArgs(
    normalizePrice,
    divide100,
    multiply20
);

console.log(`With args:   ${discountPriceWithArgs(200.0)}`);



//work of function
/* let total = [0, 1, 2, 3].reduceRight(function (prev, curr) {
    return prev + curr;
});
console.log(total); */