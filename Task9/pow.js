'use strict';

const x = +prompt('Enter number');
const n = +prompt('Enter degree');

function pow(x, n) {
    return !(n > 0) ? x ** n : alert(`n ${n} is not natural value`);
}