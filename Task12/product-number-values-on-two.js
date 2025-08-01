'use strict';

let menu = {
    width: 200,
    height: 300,
    title: "Моє меню"
};

showObjects(menu);

multiplyNumeric(menu);

showObjects(menu);

function showObjects(obj) {
    for (let key in obj) {
        alert(obj[key]);
    }
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}