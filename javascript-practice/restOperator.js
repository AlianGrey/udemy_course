const log1 = function (a, b, ...rest) {  //rest operator
    console.log(a, b, rest);
}

log1('basic', 'rest', 'operator', 'usage');


const log2 = function (a, b, ...rest) {
    console.log(a, b, ...rest); //spread operator наоборот разворачивает массив
}

log2('basic', 'rest', 'operator', 'usage');


