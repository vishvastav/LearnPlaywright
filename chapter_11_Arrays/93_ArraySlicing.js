let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1, 3)); //start,end-1

console.log(arr.slice(2));

console.log(arr.slice(-2));
console.log(arr.slice(0));

let arrslice = [10, 20, 30, 40, 50];
let s = arrslice.slice(1,4);
console.log(arrslice);
console.log(s);

let arrsplice = [10, 20, 30, 40, 50];
let s1 = arrsplice.splice(1,4);
console.log(arrsplice);
console.log(s1);