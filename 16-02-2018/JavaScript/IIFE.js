// Представьте различные способы создания IIFE

// 1.
(function add(x, y) {
    console.log(x + y);
})(2, 4);

// 2.
(function add(x, y) {
    console.log(x + y);
}(7, 6));