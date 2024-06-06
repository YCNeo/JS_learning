import Person from "./person";


let neo = new Person('Neo', 18, 'Rong');
neo.greet();
console.log(neo.name, neo.age);
neo.age = 23;
console.log(neo.name, neo.age);


let tim = new Person('Tim', 18);
tim.greet();
console.log(tim.name, tim.age);