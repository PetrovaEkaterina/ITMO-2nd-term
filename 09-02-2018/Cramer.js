"use strict";

const [a1, b1, c1, a2, b2, c2] = [1, 3, 2, 9, 2, 7];

function get2x2Determinant(row1col1, row1col2, row2col1, row2col2) {
  return (row1col1 * row2col2) - (row1col2 * row2col1);
};

let det = get2x2Determinant(a1, b1, a2, b2);
let det1 = get2x2Determinant(c1, b1, c2, b2);
let det2 = get2x2Determinant(a1, c1, a2, c2);

let x1 = det1 / det;
let x2 = det2 / det;

console.log(`The roots: ${x1} and ${x2}`);