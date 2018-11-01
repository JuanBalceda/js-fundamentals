function factorial(n) {
    if (!this.cache) {
        this.cache = {}
    }
    if (this.cache[n]) {
        return this.cache[n];
    }
    if (n === 1) {
        return 1
    } else {
        this.cache[n] = n * factorial(n - 1);
        debugger;
        return this.cache[n];
    }
}

console.log(factorial(6));