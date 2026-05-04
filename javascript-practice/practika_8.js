// Место для первой задачи
function getTimeFromMinutes(num) {
    let minutes = num;
    if (minutes < 0 || isNaN(minutes) || !Number.isInteger(minutes)) {
        console.log('Ошибка, проверьте данные');
    }
    let hour = Math.trunc(minutes / 60);
    minutes = minutes - (hour * 60);
    if (hour == 0) {
        console.log(`Это ${hour} часов и ${minutes} минут`);
    }
    else if (hour == 1) {
        console.log(`Это ${hour} час и ${minutes} минут`);
    }
    else {
        console.log(`Это ${hour} часа и ${minutes} минут`);
    }
}
getTimeFromMinutes(+prompt("Введите количество минут", '60'));

// Место для второй задачи
function findMaxNumber(...args) {
    if (args.length < 4) {
        console.log(0);
    }
    let max = args[0];
    for (const arg of args) {
        if (typeof (arg) != 'number') {
            console.log(0);
        }
        if (arg > max) {
            max = arg;
        }
    }
    console.log(max);
}
findMaxNumber(1, 5, 6.6, 11);