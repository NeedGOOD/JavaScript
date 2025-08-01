'use strict';

const user = {};

user.name = 'Ivan';

user.surname = 'Smit';

showDataUser(user);

user.name = 'Petro';

showDataUser(user);

delete user.name;

showDataUser(user);

function showDataUser(user) {
    for (let key in user) {
        alert(user[key]);
    }
}