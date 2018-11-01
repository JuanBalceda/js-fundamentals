function sayHi(finalPhrase) {
    return function (name) {
        console.log(`Hola ${name}, ${finalPhrase}`)
    }
}

const sayHiArg = sayHi('che');
const sayHiMex = sayHi('wey');
const sayHiCol = sayHi('parse');
const sayHiPer = sayHi('causa');

sayHiArg('Sacha');
sayHiMex('Pedro');
sayHiCol('Freddy');
sayHiPer('Juan');