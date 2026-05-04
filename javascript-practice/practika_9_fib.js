function fib(num) {

    if (typeof (num) != 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }
    let arr = [];
    for (let i = 0; i < num; i++) {

        if (i == 0 || i == 1) {
            arr[i] = i;
        }

        else {
            arr[i] = (arr[i - 1] + arr[i - 2]);
        }


    }
    return arr.join(' ');
}

console.log(fib(+prompt("Введите число для ряда Фибоначчи", '4')));

//0 1 1 2 3 5 8
//0 1 1 3