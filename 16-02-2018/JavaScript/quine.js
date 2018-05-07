// Необходимо с помощью IIFE реализовать квайн на JavaScript

(function self() {require('fs').readFile(process.argv[1], (error, code) => console.log(code.toString()))})();