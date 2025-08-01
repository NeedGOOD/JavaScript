'use strict';

const schedule = {};

isEmpty(schedule);

// alert(isEmpty(schedule));

schedule['8:30'] = 'Wake up';

// alert(isEmpty(schedule));

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
