let num = 1095;
function amountOfPages(summary) {
    let str = '';

    //variant 1
    let counter = 1;
    while (str.length < summary) {
        str += counter;
        counter++;
    }
    return counter - 1;
}

function amountOfPages2(summary) {
    let str = '';

    //variant 2
    for (let i = 0; i < summary; i++) {
        str += i + 1;
        if (str.length >= summary) {
            return i + 1;
        }
    }
}

console.log(`Вариант с while: ` + amountOfPages(num));
console.log(`Вариант с for: ` + amountOfPages2(num));
