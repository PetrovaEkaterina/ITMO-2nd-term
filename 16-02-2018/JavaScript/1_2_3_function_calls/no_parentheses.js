function lookMomNoParentheses() {
    console.log(`I'm so proud`);
}

new lookMomNoParentheses;

// using valueOf. toString could also be used
let noParentheses = {
    valueOf: function() {
        console.log(`I'm so proud`);
    }
}

'' + noParentheses;