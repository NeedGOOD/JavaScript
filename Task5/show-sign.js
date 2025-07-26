'use strict';

const value = +prompt('Enter number');

if (value > 0) {
    alert(1);
} else if (value < 0) {
    alert(-1);
} else if (value === 0) {
    alert(0);
} else {
    alert(`This isn't a number`);
}