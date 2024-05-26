// Constructor function
function Person(name) {
    this.name = name;
}

const person1 = new Person('Alice');


// Adding a method to the prototype
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}.`);
};

// Creating an object
const person = new Person('Alice');

person1.greet(); // Output: Hello, my name is Alice.
// Accessing method from prototype
person.greet(); // Output: Hello, my name is Alice.
