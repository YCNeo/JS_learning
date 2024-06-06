import Creature from './creature.js'

export default class Goat extends Creature {
    #foodPoint;
    #maxAge = 70;
    #mark = 'X';

    constructor() {
        super();
        this.#foodPoint = 20;
    }

    eat() { this.#foodPoint += 5; }

    isLife() { return this.age <= this.#maxAge; }


    // getter
    set foodPoint(foodPoint) { this.#foodPoint = foodPoint; }

}