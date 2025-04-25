class Student {
    /* short cut constructor syntax, here automatically properties
        are created based on the visibility in the parameter
    */
    constructor(_id, _name) {
        this._id = _id;
        this._name = _name;
    }
    display() {
        console.log(`Name: ${this._name}`);
    }
}
// creating a student object & calling display()
let student1 = new Student(120, "Raj");
student1.display();
/* a function to return promise of Student object
    since tsc converts TS to ES5 JS & promises were not there
    we must use tsc --target es6 file.ts
*/
function api() {
    return Promise.resolve(new Student(222, "Ravi"));
}
// calling the promise
api().then(v => console.log(`proimse result:`, v)).catch(err => console.log(err));
