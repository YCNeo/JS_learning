export default class Person {
    constructor(private _name: string, private _age: number, private _lover?: string) { }

    greet() {
        if (this._lover !== undefined)
            console.log(`Hi, I'm ${this._name}, ${this._age} this year, and I have a lover ${this._lover}.`);
        else
            console.log(`Hi, I'm ${this._name}, ${this._age} this year, I'm single.`);
    }

    get name() { return this._name; }

    get age() { return this._age; }

    // get lover() {
    //     if (this._lover !== undefined)
    //         return this._lover;
    //     else 
    //         return undefined;
    // }

    set age(val: number) { this._age = val; }

    set name(val: string) { this._name = val; }

    set lover(val: string) { this._lover = val; }
}