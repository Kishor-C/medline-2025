// Example1: using functions with return types
function greet(userId: number, username: string) : string {
    return `Hello ${username}, your id is ${userId}`;
}
let result = greet(245, "World");
console.log(`Ex1 Result: ${result}`);
// Example2: creating the types to a literal style object, you must user : after the variable to specify type
let user : {id: number, name : string, isEmployed: boolean};
user = {id: 1234, name : "Alex", isEmployed : true};
console.log(`Ex2 user object with mandatory types: `, user);
// Example3: tuple to create a fixed set of values with types
let colors : [string, string, string, number];
colors = ["red", "green", "blue", 3];
console.log(`Ex3 using fixed structure with tuples: ${colors}`);
// Example4: union type - you can have a variable mulitple types use | operator
function printUserId(id : string | number, items : string | number[]) : void  {
    if(typeof(id) == 'string') {
        let userid = id.toUpperCase();
        console.log(`Id either in string | number = ${userid}`);
    }
    console.log(`Id either in string | number = ${id}, slicing items: ${items.slice(1, 3)}`);
}
printUserId(205, "welcome");
printUserId("User01", [4, 5, 6, 7, 8]);