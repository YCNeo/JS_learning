// let firstName = 'Neo', lastName = 'Pan';

let name = 'Neo';
let age = 18;
let isMarried = false;
let numberOfHair = undefined;
let interest = null;

// name = 1;
// console.log(name + ' is ' + age, isMarried, numberOfHair, interest);

let person = {
    name: "Neo",
    age: 18,
    isMarried: false
};

let man = {
    name: "Pan"
}

console.log(person);

console.log(person.name + ' is ' + person.age);

function getPerson(man) {
    console.log(man.name + ' is ' + man.age);
}

getPerson(man);