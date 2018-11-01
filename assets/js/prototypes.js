function Person(name, lastName, age, weight, height) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.weight = weight;
    this.height = height;
}

Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name} ${this.lastName} and I'm ${this.age}`)
};

Person.prototype.isTall = function () {
    if (this.height > 175) {
        console.log(`I'm tall, ${this.height}`)
    }
};

let john = new Person("Juan", "Balceda", 26, 100, 185);
let ilenia = new Person("Ilenia", "Terrel", 23, 65, 170);
console.log(john);
console.log(ilenia);

john.sayHello();
john.isTall();

ilenia.sayHello();
ilenia.isTall();

//Inheritance?
function inheritance(sonPrototype, fatherPrototype) {
    let fn = function () {
        fn.prototype = fatherPrototype.prototype;
        sonPrototype.prototype = new fn;
        sonPrototype.prototype.constructor = sonPrototype;
    }
}

function Developer(name, lastName, age, weight, height) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.weight = weight;
    this.height = height;
}

inheritance(Developer, Person);

Developer.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name} ${this.lastName} and I'm a developer.`)
};

let carlos = new Person("Carlos", "Garcia", 26, 92, 175);
carlos.sayHello();

let key = new Developer("Key", "Figueroa", 26, 95, 175);
key.sayHello();

console.log(Person.prototype);
console.log(Developer.prototype);