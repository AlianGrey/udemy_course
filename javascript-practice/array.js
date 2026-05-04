/* // Место для первой задачи

// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

// Пишем решение вот тут
for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
}

// Не трогаем
console.log(arr, result);


// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
const data = [5, 10, 'Shopping', 20, 'Homework'];

// Пишем решение вот тут
for (let j = 0; j < data.length; j++) {
    if (typeof (data[j]) == 'number') {
        data[j] *= 2;
    } else {
        data[j] += " - done";
    }
}
// Не трогаем
console.log(data); */


// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

// Пишем решение вот тут
for (let k = data.length - 1; k >= 0; k--) {
    result.push(data[k]);
}

// Не трогаем
console.log(result);



