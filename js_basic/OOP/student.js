import { Person } from "./person.js";

export class Student extends Person {
    #major;
    #degree;
    
    constructor(name, major, degree) {
        super(name);
        this.#major = major;
        this.#degree = degree;
    }

    get major() { return this.#major; }

    get degree() { return this.#degree; }
}