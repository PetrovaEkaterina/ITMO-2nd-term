// binding

function numToDegree(degree) {
    return this ** degree;
}

// let numToDegree = (degree) => this ** degree; 
// arrow function has no context

let piToDegree = numToDegree.bind(Math.PI);
let eToDegree = numToDegree.bind(Math.E);

console.log( piToDegree(3) );
console.log( eToDegree(4) );