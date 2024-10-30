var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    //Only accessable within the class
    Animal.prototype.getAge = function () {
        return this.age;
    };
    //Accessible through this
    Animal.prototype.accessGetAge = function () {
        return this.getAge();
    };
    return Animal;
}());
var dog = new Animal("bucky", 12);
console.log(dog.accessGetAge());
