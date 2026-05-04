'use strict';
//ajax = asinchronius js & xml

const inputRub = document.querySelector('#rub'),
    inputLar = document.querySelector('#lar'),
    btn = document.querySelector('button'),
    form = document.querySelector('#countMoney');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    //status -статус ответа от сервера 200 ок, 400 ошибки клиента, 500 ошибки сервера
    //statusText - текстовый ответ сервера , расшифровка ответа текстом
    //response -ответ от сервера, вернувшиеся данные
    //readyState От 0 до 4 готово - состояние готовности получения и отправки данных

    //readystatechange когда события меняют состояние от 0 - ничего не сделано и  до 4 ответ успешно получен = Done

    request.addEventListener('readystatechange', (e) => {
        if (request.readyState == 4 && request.status == 200) {
            const data = JSON.parse(request.response);
            inputLar.value = (+inputRub.value / data.current.lar).toFixed(2); //округляем до 2 цифр после запятой
        } else {
            inputLar.textContent = "Что-то пошло не так";
        }
    });
    btn.addEventListener('click', () => {
        form.reset();
    });


});