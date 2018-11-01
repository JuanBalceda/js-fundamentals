// Arrays
let john = {
    name: 'Juan',
    lastName: 'Balceda',
    age: 26,
    weight: 105,
    height: 1.85,
    books : 20
};
let ilenia = {
    name: 'Ilenia',
    lastName: 'Terrel',
    age: 23,
    weight: 60,
    height: 1.70,
    books : 150
};
let rocio = {
    name: 'Rocio',
    lastName: 'Balceda',
    age: 22,
    weight: 80,
    height: 1.65,
    books : 50
};
let key = {
    name: 'Key',
    lastName: 'Figueroa',
    age: 26,
    weight: 90,
    height: 1.75,
    books : 50
};
let carlos = {
    name: 'Carlos',
    lastName: 'Garcia',
    age: 26,
    weight: 95,
    height: 1.75,
    books : 10
};

let people = [john, ilenia, rocio, key, carlos];
console.log(people);
/*
for (let i = 0; i < people.length; i++) {
    console.log(`${people[i].name} is ${people[i].age} years old.`)
}
*/

//For Each
people.forEach(p => console.log(`${p.name} is ${p.age} years old.`));

//Filter
const isHeavy = ({weight}) => weight > 80;
let heavyPeople = people.filter(isHeavy);
heavyPeople.forEach(p => console.log(`${p.name} is ${p.weight} Kg.`));

//Map
const heightToCm = person => ({
    ...person,
    height: person.height * 100
});

let peopleHeight = people.map(heightToCm);
console.log(peopleHeight);

//Reduce
const reducer = (sum, {books}) => sum + books;
let totalBooks = people.reduce(reducer, 0);
console.log(`They all have read ${totalBooks} books`);
