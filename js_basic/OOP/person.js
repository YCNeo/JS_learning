export class Person {
    #fullName;

    constructor(name) {
        this.#fullName = name;
    }

    greet() {
        console.log(`Hi, I'm ${this.#fullName}, nice to meet you!`);
    }
}