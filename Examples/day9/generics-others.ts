//Generics allow you to create API's that are reusable
// your api must able to work with the types created today & even for tomorrow
function printType<T>(arg : T) {
    console.log(`Generic type is : `,
        typeof(arg), 'Value: ', arg);
}
printType<number>(20);
printType<string>("hello: ");
// creating an Animal type & passing to printType
type Animal = {horns: number};
printType<Animal>({horns: 2});
// conditional types: allow you to define types based on a condition
// syntax: T extends U ? X : Y
interface X { } 
interface Y extends X { }

type Z = Y extends X ? number : string; // conditional type
let x2 : Z = 30; // Z is of string type

// mapped types
type Human = {
    name : string;
    age : number;
}
type StringTypeProps = {
    [K in keyof Human] : string;
}
type OptionalProps = {
    [K in keyof Human] ?: Human[K];
}
const human1 : StringTypeProps = { name : "Chethan", age : "20"};
console.log(`Name type and age type are ${typeof(human1.name)}, ${typeof(human1.age)}`)
const human2 : OptionalProps = {};

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