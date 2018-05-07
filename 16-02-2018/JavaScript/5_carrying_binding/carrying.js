// carrying
const toPow = x => y => y ** x;

const toQuadratic = toPow(2);
const toCube = toPow(3);

console.log( toQuadratic(4) );
console.log( toCube(5) );