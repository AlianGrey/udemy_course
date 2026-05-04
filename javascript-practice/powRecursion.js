//pow(2, 1)  2
//pow(2, 2)  4
//pow(2, 3)  8
//pow(2, 4)  16

let a = 3, b = 0;
console.log(`Основание = ` + a + `.  Степень = ` + b);
//straight variant
function check(n) {
    if (n < 0) {
        return `Некорректное значение n= ${n}`;
    }
}
function pow(x, n) {
    check(n);
    if (n == 0) {
        return 1;
    }
    let res = 1;
    for (let i = 0; i < n; i++) {
        res *= x;
    }
    return res;
}
console.log(`Обычный способ  = ` + pow(a, b));

//recursion variant
function powRecursian(x, n) {
    if (n == 0) {
        return 1;
    }
    if (n == 1) {
        return x;
    } else {
        return x * powRecursian(x, n - 1);
    }
}
console.log(`Рекурсия = ` + powRecursian(a, b));
