
// type alias
type Point  = { x : number, y : number};
function printCoordinates(pt : Point) {
    console.log(`printing co-oridnates: ${pt.x}, ${pt.y}`)
}
printCoordinates({x:20, y:50});
// interfaces which can be extended
interface A { id : number;}
interface B extends A {name : string;}
let x : B = {id : 100, name : "Raj"}
// class// private, public, protected : avaiable to the subclass
class Person {
    private name : string;
    protected email?: string;
    constructor(name : string, email?: string) { this.name = name; this.email = email; }
    display() { console.log(`Name=${this.name} and email=${this.email ?? 'NA'}`)}
}
class Employee extends Person {
    salary: number;
    constructor(name:string, salary: number, email?:string, ){
        super(name, email);
        this.salary = salary;
    }
    display() { console.log(`${this.email}`)}
}
let p1 = new Person("Raj", "R@g"); 
p1.display();
let e1 = new Employee("Vijay", 34000, "v@g"); //email is optional
e1.display();


