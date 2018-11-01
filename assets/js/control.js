// If statement
let john = {
    name: 'John',
    lastName: 'Balceda',
    age: 26,
    weight: 105
};

const LEGAL_AGE = 18;

/*
//Anonymous function
const printIfLegalAge = function (person) {
    if (person.age >= legalAge) {
        console.log(`${person.name} is legal age, he/she is ${person.age}`)
    }
};
*/

// Arrow function
//const isLegalAge = person => person.age >= LEGAL_AGE;
const isLegalAge = ({age}) => age >= LEGAL_AGE;

//console.log(`${john.name} is ${john.age}. Legal age: ` + isLegalAge(john));

function printIfLegalAge(person) {
    if (isLegalAge(person)) {
        console.log(`${person.name} is legal age, he/she is ${person.age}`)
    }
}

function isOld(person) {
    if (person.age >= 60) {
        console.log(`${person.name} is old.`)
    } else {
        console.log(`${person.name} is young.`)
    }
    printIfLegalAge(person)
}

isOld(john);

/*
// For
console.log(`On september 2018, ${john.name} weighs ${john.weigh} Kg`);

for (let i = 0; i < 30; i++) {
    john.weigh -= Math.random();
}

console.log(`On december 2018, ${john.name} weighs ${john.weigh.toFixed(2)} Kg`);
*/

// While
const CHANGE_WEIGHT = 0.5;

const loseWeight = person => person.weight -= CHANGE_WEIGHT;
const gainWeight = person => person.weight += CHANGE_WEIGHT;

const eatTooMuch = () => Math.random() < 0.3;
const doSports = () => Math.random() > 0.3;

const GOAL = 95;
let days = 0;
while (john.weight > GOAL) {
    // debugger;
    if (eatTooMuch()) {
        gainWeight(john)
    } else if (doSports()) {
        loseWeight(john)
    }
    days += 1;
}

console.log(`${days} days have pass until ${john.name} reached the goal: ${john.weight} Kg`);

// Do-While

let count = 0;
const rain = () => Math.random() < 0.25;

do {
    count++;
} while (!rain());
if (count === 1) {
    console.log(`It rain ${count} time.`)
} else {
    console.log(`It rain ${count} times.`)
}

// Switch
let zodiac = prompt('What is your zodiac sign?');
console.log(zodiac);

switch (zodiac) {
    case 'aries':
        console.log('The pioneer and trailblazer of the horoscope wheel, Aries energy helps us initiate, ' +
            'fight for our beliefs and fearlessly put ourselves out there.');
        break;
    case 'taurus':
        console.log('The persistent provider of the horoscope family, Taurus energy helps us seek security, ' +
            'enjoy earthly pleasures and get the job done.');
        break;
    case 'gemini':
        console.log('The most versatile and vibrant horoscope sign, Gemini energy helps us communicate, ' +
            'collaborate and fly our freak flags at full mast.');
        break;
    case 'cancer':
        console.log('The natural nurturer of the horoscope wheel, Cancer energy helps us connect with our feelings, ' +
            'plant deep roots and feather our family nests.');
        break;
    case 'leo':
        console.log('The drama queen and regal ruler of the horoscope clan, Leo energy helps us shine, ' +
            'express ourselves boldly and wear our hearts on our sleeves.');
        break;
    case 'virgo':
        console.log('The masterful helper of the horoscope wheel, Virgo energy teaches us to serve, ' +
            'do impeccable work and prioritize wellbeing—of ourselves, our loved ones and the planet.');
        break;
    case 'libra':
        console.log('The balanced beautifier of the horoscope family, Libra energy inspires us to seek peace, ' +
            'harmony and cooperation—and to do it with style and grace.');
        break;
    case 'scorpio':
        console.log('The pioneer and trailblazer of the horoscope wheel, Aries energy helps us initiate,' +
            ' fight for our beliefs and fearlessly put ourselves out there.');
        break;
    case 'sagittarius':
        console.log('The worldly adventurer of the horoscope wheel, Sagittarius energy inspires us to dream big,' +
            ' chase the impossible and take fearless risks.');
        break;
    case 'capricorn':
        console.log('The pioneer and trailblazer of the horoscope wheel, Aries energy helps us initiate, ' +
            'fight for our beliefs and fearlessly put ourselves out there.');
        break;
    case 'aquarius':
        console.log('The mad scientist and humanitarian of the horoscope wheel, ' +
            'futuristic Aquarius energy helps us innovate and unite for social justice.');
        break;
    case 'pisces':
        console.log('The dreamer and healer of the horoscope family, Pisces energy awakens compassion, ' +
            'imagination and artistry, uniting us as one.');
        break;
    default:
        console.log('Not found');
        break;
}