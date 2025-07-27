'use strict';

const login = prompt('Введіть свій логін');

if (login === 'Admin') {
    const password = prompt('Введіть свій пароль');

    if (password === 'Господар') {
        alert('Ласкаво просимо!');
    } else if (password === '' || password == null) {
        alert('Скасовано');
    } else {
        alert('Я вас не знаю');
    }
} else if (login === '' || login == null) {
    alert('Скасовано');
} else {
    alert('Я вас не знаю');
}