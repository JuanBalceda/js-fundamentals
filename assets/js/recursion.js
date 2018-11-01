function division(dividend, divisor) {
    if (dividend < divisor) {
        return 0
    } else {
        return 1 + division(dividend - divisor, divisor)
    }
}

console.log(division(13,4));
console.log(division(30,3));