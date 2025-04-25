//Generics allow you to create API's that are reusable
// your api must able to work with the types created today & even for tomorrow
function printType(arg) {
    console.log("Generic type is : ", typeof (arg), 'Value: ', arg);
}
printType(20);
printType("hello: ");
printType({ horns: 2 });
var x2 = 30; // Z is of string type
var human1 = { name: "Chethan", age: "20" };
console.log("Name type and age type are ".concat(typeof (human1.name), ", ").concat(typeof (human1.age)));
var human2 = {};
// interface IdLabel {id: number}
// interface NameLabel { name : string}
// type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;
// class Student2 {}
// function createLabel<T extends number | string>(idOrName: T) : NameOrId<T> {
//     throw "Unimplemented";
// } // API -> Success<T>, Error<T> 
// createLabel("Hello"); 
// createLabel(20);
// createLabel(Math.random() > 0.1 ? "hello world" : 25);
//createLabel(new Student2());
