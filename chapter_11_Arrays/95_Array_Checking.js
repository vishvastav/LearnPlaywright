let result = Array.isArray([1, 2, 3]);
console.log(result);

let result1 = Array.isArray("a");
console.log(result1);


//every & sum

let s = [80, 90, 85];

//true
console.log(s.every(s => s >= 70));
//false
console.log(s.every(s => s <= 70));

let statuscode = [200, 201, 203]
let code = statuscode.every(statuscode => statuscode <= 200);
console.log(code);

s.some(s => s >= 70); //true
console.log(s);
s.some(s => s <= 70); //false
console.log(s);