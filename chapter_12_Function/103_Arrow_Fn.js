const greet = function (name) {
    return `Hi, ${name}`;
}
let r = greet("Vishal");
console.log(r);

const greet2 = (name1) => name1;
//const greet2 = (name1) => `hi, ${name1}`;
let r2 = greet2("Vishal");
console.log(r2);