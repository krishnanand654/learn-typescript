var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.getUserDetail = function () {
        return {
            id: this.id,
            name: this.name
        };
    };
    return Person;
}());
var person = new Person(101, "kris");
console.log(person.getUserDetail());
