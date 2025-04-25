var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printCoordinates(pt) {
    console.log("printing co-oridnates: ".concat(pt.x, ", ").concat(pt.y));
}
printCoordinates({ x: 20, y: 50 });
var x = { id: 100, name: "Raj" };
// class// private, public, protected : avaiable to the subclass
var Person = /** @class */ (function () {
    function Person(name, email) {
        this.name = name;
        this.email = email;
    }
    Person.prototype.display = function () { var _a; console.log("Name=".concat(this.name, " and email=").concat((_a = this.email) !== null && _a !== void 0 ? _a : 'NA')); };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, salary, email) {
        var _this = _super.call(this, name, email) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.display = function () { console.log("".concat(this.email)); };
    return Employee;
}(Person));
var p1 = new Person("Raj", "R@g");
p1.display();
var e1 = new Employee("Vijay", 34000, "v@g"); //email is optional
e1.display();
