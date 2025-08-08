'use strict';

let str = prompt('enter text');

alert(checkSpam(str));

function checkSpam(str) {
    upperStr = str.toUpperCase();

    return upperStr.includes('XXX') || upperStr.includes('VIAGRA');
}