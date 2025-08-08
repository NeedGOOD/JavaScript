'use strict';

let money = '$' + prompt('Enter value money');

alert(extractCurrencyValue(money));

function extractCurrencyValue(money) {
    return +money.slice(1);
}