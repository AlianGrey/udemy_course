const someString = 'This is some strange string';
const someString2 = 5;

function reverse(str) {
    if (typeof (str) !== 'string') {
        return 'Ошибка!';
    }
    else {
        let arr = str.split('').reverse();
        return arr.join('');
    }
}
reverse(someString);
reverse(someString2);



const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) { return `Нет доступных валют`; }
    else {
        let str = 'Доступные валюты:\n';
        arr.forEach(curr => { curr !== missingCurr ? str += curr + '\n' : false; });
        return str;
    }
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');
availableCurr([], 'CNY');