'use strict';

let str = prompt('Enter your name for upper letter');

ucFirst(str);

function ucFirst(str) {
    alert(str[0].toUpperCase() + str.slice(1));
}
