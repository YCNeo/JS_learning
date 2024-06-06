export default class Creature {
    #age;
    #turn;

    constructor() {
        this.#age = 0;
        this.#turn = true;
    }

    reproduce(x, y) {
        let index;

        do {
            index = Math.round(Math.random() * 4);
        } while (this.isValid(index));


        if (index < 1)
            return this.move(x, y, 0);
        else if (index < 2)
            return this.move(x, y, 1);
        else if (index < 3)
            return this.move(x, y, 2);
        else
            return this.move(x, y, 3);
    }

    // return object within x and y coordinates of new position
    move(x, y, dir) {
        const dx = [0, 1, 0, -1];
        const dy = [1, 0, -1, 0];

        let nx = x + dx[dir];
        let ny = y + dy[dir];

        if (this.isValid(nx, ny))
            return { x: nx, y: ny };
        else
            return { x: x, y: y };
    }

    // check if the position is in the boundary
    // return boolean
    isValid(x, y) {
        return 0 <= x && x < 20 && 0 <= y && y < 35;
    }


    // getter
    get age() { return this.#age; }

    get turn() { return this.#turn; }

    // setter
    set age(value) { this.age = value; }

    set turn(turn) { this.turn = turn; }

}