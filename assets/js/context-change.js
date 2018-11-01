let john = {
    name: 'John',
    lastName: 'Balceda',
    age: 26
};

let ilenia = {
    name: 'Ilenia',
    lastName: 'Terrel',
    age: 23
};

function sayHi(hello = 'Hi') {
    console.log(`${hello}, my name is ${this.name}`)
}


// Bind
const sayHiJohn = sayHi.bind(john);
sayHiJohn();

const sayHiIlen = sayHi.bind(ilenia);
sayHiIlen();

setTimeout(sayHi.bind(john), 3000);
setTimeout(sayHi.bind(ilenia, 'Hello'), 3000);


// Call
sayHi.call(john, 'Brother');

// Apply
sayHi.apply(ilenia, ['Hello']);