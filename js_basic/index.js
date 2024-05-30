// to cheak if value is number
function isValue(value) { return typeof value === 'number' };

const List = [1, -1, 0, 2, 6, 'Neo', 'Rong', true, false];

// const filtered = List.filter(value => isValue(value));

// const items = filtered.map(value => value * value);

const items = List
    .filter(value => isValue(value))
    .map(value => value * value);

console.log(items);