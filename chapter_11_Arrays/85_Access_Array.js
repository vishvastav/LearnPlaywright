//Accessing & Modifying

let statuses = ["pass", "fail", "skip"];

console.log(statuses[0]);
console.log(statuses[2]);
console.log(statuses[-1]);
console.log(statuses.at(-1));



//Modify

statuses[1] = "blocked";
console.log(statuses);