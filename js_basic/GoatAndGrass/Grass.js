import Creature from './creature.js'

export default class Grass extends Creature {
    #maxAge = 6;

    constructor() {
        super();
    }

    isLife() { return this.age <= this.maxAge; }
}