'use strict';

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

alert(showSumSalary(salaries));

function showSumSalary(salaries) {
    let sum = null;

    for (let salarie in salaries) {
        sum += salaries[salarie];
    }

    return sum ?? 0;
}