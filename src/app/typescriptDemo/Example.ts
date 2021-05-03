// explicit types
// this tells our js that Greet() takes a person of type String and a date of type Date
export function greet(person:string, date:Date){
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

// demonstarting explicit types
greet("Max", new Date());

// implicit types
let message = "message";

