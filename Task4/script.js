'use strict';

// "10" true
alert("" + 1 + 0)

// -1 true
alert("" - 1 + 0)

// 1 true
alert(true + false)

// 2 true
alert(6 / "3")

// 6 true
alert("2" * "3")

// "9px" true
alert(4 + 5 + "px")

// "$45" true
alert("$" + 4 + 5)

// 2 true
alert("4" - 2)

// null false NaN 
alert("4px" - 2)

// "  -9  5" true
alert("  -9  " + 5)

// -14 true, but false
alert("  -9  " - 5)

// "null1" false 1
alert(null + 1)

// "undefinde1" false NaN
alert(typeof (undefined + 1))

// -2 true
alert(" \t \n" - 2)

alert(typeof NaN)
