class Person {
    constructor(name, lastName, age, weight, height) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    sayHello(response) {
        let {name, lastName, age} = this;
        console.log(`Hi! My name is ${name} ${lastName} and I'm ${age}`);
        if (response) {
            response(name, lastName, false)
        }
    }

    isTall() {
        let {height} = this;
        if (height > 175) {
            console.log(`I'm tall, ${height}`)
        }
    }
}

class Developer extends Person {
    constructor(name, lastName, age, weight, height, languaje) {
        super(name, lastName, age, weight, height);
        this.languaje = languaje;
    }

    sayHello(response) {
        let {name, lastName, languaje} = this;
        console.log(`Hi! My name is ${name} ${lastName} and I'm a ${languaje} developer.`);
        if (response) {
            response(name, lastName, true)
        }
    }
}

function responseHello(name, lastName, isDev) {
    console.log(`Hi, ${name} ${lastName}! Nice to meet you! `);
    if (isDev) {
        console.log(`You're a dev! That's awesome! :D`);
    }
}

let ilenia = new Person("Ilenia", "Terrel", 23, 65, 170);
ilenia.sayHello(responseHello);
// ilenia.isTall();

let john = new Developer("Juan", "Balceda", 26, 100, 185, "Java");
john.sayHello(responseHello);
// john.isTall();

// console.log(Person.prototype);
// console.log(Developer.prototype);