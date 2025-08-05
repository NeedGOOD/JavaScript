'use strict';

function Accumuulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('New value for adding');
    };
}

const accumuulator = new Accumuulator(4);

accumuulator.read();
accumuulator.read();

alert(accumuulator.value);