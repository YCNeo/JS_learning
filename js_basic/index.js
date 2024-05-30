// to cheak if value is number
function isValue(value) { return typeof value === 'number' };

const List = [1, -1, 0, 2, 6, 'Neo', 'Rong', true, false];

// const filtered = List.filter(value => isValue(value));

// const items = filtered.map(value => value * value);

let sum = 90;

const items = List
    .filter(value => isValue(value))
    .map(value => value * value)
    .reduce((acc, value) => acc + value, sum);

console.log(items);