// Example1: using functions with return types
function greet(userId, username) {
    return "Hello ".concat(username, ", your id is ").concat(userId);
}
var result = greet(245, "World");
console.log("Ex1 Result: ".concat(result));
// Example2: creating the types to a literal style object, you must user : after the variable to specify type
var user;
user = { id: 1234, name: "Alex", isEmployed: true };
console.log("Ex2 user object with mandatory types: ", user);
// Example3: tuple to create a fixed set of values with types
var colors;
colors = ["red", "green", "blue", 3];
console.log("Ex3 using fixed structure with tuples: ".concat(colors));
// Example4: union type - you can have a variable mulitple types use | operator
function printUserId(id, items) {
    if (typeof (id) == 'string') {
        var userid = id.toUpperCase();
        console.log("Id either in string | number = ".concat(userid));
    }
    console.log("Id either in string | number = ".concat(id, ", slicing items: ").concat(items.slice(1, 3)));
}
printUserId(205, "welcome");
printUserId("User01", [4, 5, 6, 7, 8]);
