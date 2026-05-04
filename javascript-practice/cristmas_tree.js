const lines = 5;
let result = '';

// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += ' ';
    }
    for (let k = 0; k < i * 2 + 1; k++) {
        result += '*';
    }

    result += '\n';
}
console.log(result);
