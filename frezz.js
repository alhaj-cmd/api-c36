const bottle = { color: 'yello', price: 50, }
// const keys = Object.keys(bottle);
// console.log(keys);
// const values = Object.values(bottle);
// console.log(values);
// const pair = Object.entries(bottle)
console.log(bottle);
Object.seal(bottle)
delete bottle.color;
bottle.price = 1000;
console.log(bottle)