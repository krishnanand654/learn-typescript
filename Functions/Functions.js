//Normal function
function add(x, y) {
    return x + y;
}
//Arrow Function
var addx = function (x, y) {
    return x + y;
};
//Optional Parameters
var greeting = function (x, y) {
    return "hello" + x + y;
};
var makeSquare = function (x) {
    return x * x;
};
var productsQuantity = function (x) {
    return x.map(function (e) { return makeSquare(e); });
};
console.log(productsQuantity([1, 2, 3, 4]));
