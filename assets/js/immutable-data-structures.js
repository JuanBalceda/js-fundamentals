let john = {
    name: 'John',
    lastName: 'Balceda',
    age: 26
};

//const birthday = person => person.age++;
const birthday = person => ({
    ...person,
    age: person.age + 1
});

console.log(john);
john27 = birthday(john);
console.log(john27);
console.log(john);
