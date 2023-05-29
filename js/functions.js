// Место для первой задачи
function sayHello(name) {
    let str = (`Привет, ${name}!`)
    return str;
}

console.log(sayHello('Антон'));


// Место для второй задачи
function returnNeighboringNumbers(num) {
    let arr = [num - 1, num, num + 1];
    return arr;
}

console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
function getMathResult(num, count) {
    if (typeof count != 'number' || count <= 0) {
        return num;
    }
    let str = '';
    for (let i = 1; i <= count; i++) {
        if (i === count) {
            return str += num * i;
        }
        str += num * i + '---';
    }
}
console.log(getMathResult(3, 10));