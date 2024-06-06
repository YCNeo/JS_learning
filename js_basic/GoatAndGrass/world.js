import Grass from './Grass.js'
import Goat from './Goat.js'

export default class World {
    #world = [];
    #XBoundary = 20;
    #YBoundary = 35;

    constructor(R, I) {
        this.initialize();

        // declare 5 goats and 10 grasses
        this.generateCreature(5, new Goat());
        this.generateCreature(10, new Grass());

        this.wholeLife(R, I);
    }


    // build 20*35 world
    initialize() {
        for (let i = 0; i < this.#XBoundary; i++) {
            let temp = [];

            for (let j = 0; j < this.#YBoundary; j++)
                temp.push(' ');

            this.#world.push(temp);
        }
    }


    // generate a random position
    getPosition() {
        return {
            x: Math.round(Math.random() * (this.#XBoundary - 1)),
            y: Math.round(Math.random() * (this.#YBoundary - 1))
        };
    }


    isEmpty(value) { return this.#world[value.x][value.y] === ' '; }


    // generate Creature
    generateCreature(times, Creature) {
        for (let i = 0; i < times; i++) {
            let tempPos = {};
            do {
                tempPos = this.getPosition();
            } while (!this.isEmpty(tempPos));

            this.#world[tempPos.x][tempPos.y] = Creature;
        }
    }


    wholeLife(round, interval) {
        for (let i = 0; i < round; i++) {
            this.oneRun();
            if (i % interval === 0)
                this.show();
        }
    }


    oneRun() {
        for (let i = 0; i < this.#XBoundary; ++i) {
            for (let j = 0; j < this.#YBoundary; ++j) {
                if (this.#world[i][j] !== ' ' && this.#world[x][y].mark === 'X') {
                    this.#world[i][j].foodpoint -= 1;
                    
                }
                else if (this.#world[i][j] !== ' ' && this.#world[x][y].mark === 'I') { }
            }
        }
    }


    show() {
        for (let i = 0; i < this.#XBoundary; ++i) {
            for (let j = 0; j < this.#YBoundary; ++j) {
                if (this.#world[i][j] !== ' ')
                    console.log(this.#world[i][j].mark);
                else
                    console.log(' ');
            }
        }
    }
}