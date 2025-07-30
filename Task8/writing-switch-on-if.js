'use strict';

const browser = prompt('Which are you using browser?');

if (browser === 'Edge') {
    alert("You've got the Edge!");

} else if (browser === 'Chrome'
    || browser === 'Firefox'
    || browser === 'Safari'
    || browser === 'Opera') {
    alert('Ми підтримуємо і ці браузери');
} else {
    alert('Маємо надію, що ця сторінка виглядає добре!');
}