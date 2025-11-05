
// // scope problem
// var language = "Bangla"
// function learn(e) {
//     var language = e;
//     console.log(`I am learning ${language}`);
// }
// learn("JavaScript");
// console.log(`i Know ${language}`);

// // regular function
// function learn() {
//     console.log("regular function");
//     //return undefined
// }
// const msg = learn();
// console.log(msg);

// // function expression
// const expression = function () {
//     console.log("function expression");
//     //return undefined
// }
// const express = expression();
// console.log(express);


// // named function expression
// const namedExpression = function something () {
//     console.log("named function expression");
//     //return undefined
// }
// const namedExpress = namedExpression();
// console.log(namedExpress);



// arrow function
// const arrow = () => {
//     console.log("arrow function console");
// }
// const arrow = () => console.log("arrow function console");
// const arrow = () => 6;
const arrow = () => ({
    A: 6,
    B: 8,
    C: 10
});

console.log(arrow());



// // anonymous function
// var learn = function (e) {
//     var language = e;
//     console.log(`I am learning ${language}`);
// }
