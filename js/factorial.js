//n! = n * (n - 1) * (n - 2) * ...*1
//дробное число или не число  - вернуть сообщение. =<0 then res = 1.
function factorial(n) {
    if ((typeof (n) != 'number') || !Number.isInteger(n)) {
        return `Исходное число не верно`;
    }
    if (n == 1 || n <= 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(`Факториал 5 = ` + factorial(5));
console.log(`Факториал 2.5 = ` + factorial(2.5));
console.log(`Факториал строки = ` + factorial('fdgf'));
console.log(`Факториал 0 = ` + factorial(0));
console.log(`Факториал 1 = ` + factorial(1));
console.log(`Факториал -ф5 = ` + factorial(-5));

