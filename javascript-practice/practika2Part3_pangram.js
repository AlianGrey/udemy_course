/* Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу по возможности без повторений. 
isPangram(«The quick brown fox jumps over the lazy dog») => true
isPangram(«Hello world») => false
 */

let str = 'The quick brown fox jumps over the lazy dog';
let str2 = 'Helloaz world';


// При помощи цикла
function isPangram6(str) {
    letters: for (var c = 0; c < 26; c++) {
        for (let i = 0; i < str.length; i++) {
            let s = str.charCodeAt(i)
            if (s < 65 || s > 90 && s < 97 || s > 122) continue
            if (s === 65 + c || s === 97 + c) continue letters
        }
        return false
    }

    return true
}


// С другим методом и строка каждый раз преобразовывается в коллбэке
function isPangram5(string) {
    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .every((x) => string.toLowerCase().includes(x));
}


// Вариант, когда строка переводится в нижний регистр до всех операций только 1 раз
// Это должно экономить ресурсы компьютера
function isPangram4(string) {
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) { //сравнивает в колбеке каждый символ пока не ложь, если все верны то вернёт тру
        return string.indexOf(x) !== -1;  //если элемент существует в строке то !==-1
    });
}


// С использованием регулярных выражений
function isPangram3(string) {
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}

// При помощи Set
function isPangram2(string) {
    //console.log(string.toLocaleLowerCase().replace(/[^a-z]/gi, '')); //исключающий диапазон кроме a-z
    return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}


function isPangram1(string) {
    let alf = 'abcdefghijklmnopqrstuvwxyz';
    alf = Array.from(alf).sort();
    alf = alf.join('');

    string = string.toLowerCase();
    // let set = new Set(string);
    let arr = Array.from(new Set(string)).sort();

    arr.forEach((item, i, arr) => {
        if (item == ' ' || item == ',' || item == '.' || item == '!') {
            delete arr[i];
        }
    });

    string = arr.join('');

    if (string == alf) {
        console.log(`Исходная строка: ` + string, `Алфавит: ` + alf);
        return true;
    } else {
        console.log(`Исходная строка: ` + string, `Алфавит: ` + alf);
        return false;
    }
}



console.log(isPangram2(str));