// Maximum number between two numbers, okay, by using the ternary operator 

// And maximum between the three numbers also by using turnery over 


let a = 5;
console.log(a++ + ++a - --a + a-- + ++a);
console.log(a);


let number1 = 178;
let number2 = 40000;
let number3 = 2000;

let maxNumber = number1 > number2 ? console.log(`max number is number1 ${number1}`) : console.log(`max number is number2 ${number2}`);




let maxThreeNumber = number1 > number2
    ? (number1 > number3 ? number1 : number3)
    : (number2 > number3 ? number2 : number3);

console.log(maxThreeNumber)