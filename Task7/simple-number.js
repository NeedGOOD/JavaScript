'use strict';

const number = +prompt('Enter number');

for (let i = 2; i < number; ++i) {
    if (i === 2 || i === 3 || i % 2 && i % 3 != 0 && i % 5 != 0) {
        alert(i);
    }
}