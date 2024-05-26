function rand() {
    return (Math.random() * 0x7FFF);
}
let target = [];
let countInI = 0;

for (let i = 0; i < 5; i++) {
    let R = rand() % 10;
    let temparr = [], countInJ = 0;

    for (let j = 0; j < R; j++)
        temparr[countInJ++] = j;

    target[countInI++] = temparr;
}

console.group("test");
for (let i = 0; i < 5; i++) {
    console.log(target[i]);
}
console.groupEnd();