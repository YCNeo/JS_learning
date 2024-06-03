import Creature from './creature.js'

export default class Goat extends Creature {
    #foodPoint;
    #maxAge = 70;

    constructor(Fp) {
        super();
        this.#foodPoint = 20;
    }

    isLife() { return this.age <= this.maxAge; }

}