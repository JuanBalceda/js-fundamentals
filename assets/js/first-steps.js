//Strings
const text = 'This is a text chain.';
const text2 = 'This is another text chain.';

console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text2.charAt(10));
console.log(text2.length);
console.log(`${text} ${text2.substr(8, 15)}`);
console.log(`${text} ${text2.substring(8, 15)}`);


//Numbers
const winePrice = 200.3;
console.log(winePrice * 3);
console.log(winePrice * 100 * 3 / 100);

console.log(Math.round(winePrice * 100 * 3 / 100));

console.log((winePrice * 3).toFixed(2));
console.log(Math.round(winePrice * 100 * 3 / 100).toFixed(2));

console.log(parseFloat((winePrice * 3).toFixed(2)));

/*
//Functions
const name = 'John';

function printName(name) {
    console.log(name.toUpperCase())
}

printName(name);
*/

//Objects
let john = {
    name: 'John',
    lastName: 'Balceda',
    age: 26
};

function printName(person) {
    // let name = person.name;
    let {name} = person;
    console.log(name.toUpperCase())
}

printName(john);

function print({name}) {
    console.log(name.toUpperCase())
}

print({name: 'Peter'});

function birthday(person) {
    return {
        ...person,
        age: person.age + 1
    }
}

let newJohn = birthday(john);
console.log(john);
console.log(newJohn);


//Comparision
const x = 4;
const y = '4';

console.log(x == y);
console.log(x === y);

let sameJohn = john;
console.log(john === newJohn);
console.log(john === sameJohn);