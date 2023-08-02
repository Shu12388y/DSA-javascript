"use strict";
let factor = 5;
function factorial(x) {
    let temp = x;
    temp = temp * x - 1;
    if (x > 1) {
        factorial(x - 1);
    }
    return console.log(temp);
}
factorial(factor);
