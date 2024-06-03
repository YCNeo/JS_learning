export default class Creature {
    #age;
    #turn = true;

    constructor() {
        this.#age = 0;
    }

    born(x, y) {
        let index = Math.random() * 4;

        if (0 <= index && index < 1)
            return this.move(x, y, 0);
        else if (1 <= index && index < 2)
            return this.move(x, y, 1);
        else if (2 <= index && index < 3)
            return this.move(x, y, 2);
        else
            return this.move(x, y, 3);
    }

    move(x, y, dir) {
        const dx = [0, 1, 0, -1];
        const dy = [1, 0, -1, 0];

        return {
            x: x + dx[dir],
            y: y + dy[dir]
        };
    }



    // getter
    get age() { return this.#age; }

    get turn() { return this.#turn; }

    // setter
    set turn(turn) { this.turn = turn; }

}