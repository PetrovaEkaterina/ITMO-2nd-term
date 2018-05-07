// function rgbColors(first = Math.floor(Math.random() * 256),
//                   second = Math.floor(Math.random() * 256),
//                   third = Math.floor(Math.random() * 256)) {
//     return `rgb(${first}, ${second}, ${third})`;
// } 
// U G L Y

function rgbColors(a, b, c) {
    a = a || Math.floor(Math.random() * 256);
    b = b || Math.floor(Math.random() * 256);
    c = c || Math.floor(Math.random() * 256);
    
    return `rgb(${a}, ${b}, ${c})`
}

console.log( rgbColors() );

console.log( rgbColors(12, 54, 111) );