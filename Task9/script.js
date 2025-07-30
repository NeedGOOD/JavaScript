'use strict';

function checkAgeFirst(age) {
    return age > 18 ? true : confirm('Батьки дозволили?');
}

function checkAgeSecond(age) {
    return (age > 18) || confirm('Батьки дозволили?');
}