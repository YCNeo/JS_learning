const circle = {
    redius: 1,
    draw() { console.log('circle'); }
}

circle.draw()

let another = {}
for(let key in circle) 
    another[key] = circle[key]

const another = Object.assign({}, circle);

const another = { ...circle };

console.log(another)