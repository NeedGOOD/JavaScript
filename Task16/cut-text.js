'use strict';

let text = prompt('Enter text');

const maxlength = +prompt('Enter max lenght for text');

truncate(text, maxlength);

function truncate(str, maxlength) {
    str.length > maxlength ? str = str.slice(0, maxlength) + '...' : str;

    alert(str);
}