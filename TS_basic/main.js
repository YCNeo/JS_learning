var Person = /** @class */ (function () {
    function Person(_name, _age, _lover) {
        this._name = _name;
        this._age = _age;
        this._lover = _lover;
    }
    Person.prototype.greet = function () {
        if (this._lover !== undefined)
            console.log("Hi, I'm ".concat(this._name, ", ").concat(this._age, " this year, and I have a lover ").concat(this._lover, "."));
        else
            console.log("Hi, I'm ".concat(this._name, ", ").concat(this._age, " this year, I'm single."));
    };
    Object.defineProperty(Person.prototype, "name", {
        get: function () { return this._name; },
        set: function (val) { this._name = val; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () { return this._age; },
        // get lover() {
        //     if (this._lover !== undefined)
        //         return this._lover;
        //     else 
        //         return undefined;
        // }
        set: function (val) { this._age = val; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lover", {
        set: function (val) { this._lover = val; },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var neo = new Person('Neo', 18, 'Rong');
neo.greet();
console.log(neo.name, neo.age);
neo.age = 23;
console.log(neo.name, neo.age);
var tim = new Person('Tim', 18);
tim.greet();
console.log(tim.name, tim.age);
