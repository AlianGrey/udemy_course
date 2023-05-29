// Место для первой задачи
function calculateVolumeAndArea(num) {
    let v, s;
    if (num <= 0 || typeof (num) !== 'number' || !Number.isInteger(num)) {
        return 'При вычислении произошла ошибка';
    }
    v = num * num * num;
    s = num * num * 6;
    return `Объём куба: ${v}, площадь всей поверхности: ${s}`;
}
calculateVolumeAndArea(+prompt('Введите длину стороны куба', '1'));

// Место для второй задачи
function getCoupeNumber(num) {
    if (!Number.isInteger(num) || num < 0 || typeof (num) != 'number') {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    if (num === 0 || num > 36) {
        return "Таких мест в вагоне не существует";
    }
    return Math.ceil(num / 4);

}

getCoupeNumber(+prompt('Введите номер места', '3'));
