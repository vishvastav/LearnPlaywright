# JavaScript & Playwright - Revision Notes

> Quick reference notes for JavaScript fundamentals and Playwright concepts

---

## Chapter 1: JavaScript Basics

**Key Points:**
- JS runs on browser (client-side) and Node.js (server-side)
- `console.log()` for output
- File extension: `.js`
- Run with: `node filename.js`

**Commands:**
- `console.log("Hello")` - Print output
- `console.table()` - Display data in table format
- `typeof variable` - Check data type

---

## Chapter 2-3: Identifiers & Comments

**Identifier Rules:**
- Can contain: letters, digits, underscore `_`, dollar `$`
- Cannot start with digit
- Case-sensitive: `name` != `Name`
- Reserved keywords cannot be used: `let`, `const`, `function`, `class`, etc.

**Naming Conventions:**
- camelCase: `firstName`, `totalAmount` (preferred for variables/functions)
- PascalCase: `FirstName`, `TotalAmount` (classes)
- snake_case: `first_name` (constants sometimes)
- UPPER_CASE: `MAX_SIZE` (constants)

**Comments:**
```javascript
// Single line comment
/* Multi-line
   comment */
```

---

## Chapter 4: Variables (var, let, const)

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Hoisting | Yes (initialized undefined) | Yes (not initialized) | Yes (not initialized) |
| Re-declare | Allowed | Not Allowed | Not Allowed |
| Re-assign | Allowed | Allowed | Not Allowed |

**Scope Types:**
- **Global Scope**: Outside any function/block
- **Function Scope**: Inside function (var)
- **Block Scope**: Inside `{}` (let, const)

**Hoisting:**
- `var` declarations are hoisted and initialized with `undefined`
- `let` and `const` are hoisted but NOT initialized (Temporal Dead Zone)
- Functions are fully hoisted

**Best Practice:**
- Use `const` by default
- Use `let` when reassignment needed
- Avoid `var` (function scope causes confusion)

---

## Chapter 5: Data Types & Literals

**Primitive Types:**
- `string` - Text: `"Hello"`, `'Hello'`, `` `Hello` ``
- `number` - Integers & decimals: `42`, `3.14`
- `boolean` - `true` / `false`
- `null` - Intentional empty value (typeof returns "object" - JS bug)
- `undefined` - Variable declared but not assigned
- `bigint` - Large numbers
- `symbol` - Unique identifiers

**String Types:**
- Single quotes: `'Hello'`
- Double quotes: `"Hello"`
- Backticks (Template Literal): `` `Hello ${name}` ``

**Template Literals:**
```javascript
const name = "John";
console.log(`Hello ${name}`);  // String interpolation
console.log(`Line 1
Line 2`);  // Multi-line strings
```

**typeof Results:**
```javascript
typeof "text"     // "string"
typeof 42         // "number"
typeof true       // "boolean"
typeof undefined  // "undefined"
typeof null       // "object" (bug in JS)
typeof {}         // "object"
typeof []         // "object"
typeof function(){} // "function"
```

---

## Chapter 6: Operators

### Arithmetic Operators
```javascript
+   // Addition
-   // Subtraction
*   // Multiplication
/   // Division
%   // Modulus (remainder)
**  // Exponentiation (power)
```

### Comparison Operators
```javascript
==   // Equal (loose - type coercion)
===  // Strict equal (value + type)
!=   // Not equal (loose)
!==  // Strict not equal
>    // Greater than
<    // Less than
>=   // Greater than or equal
<=   // Less than or equal
```

**Important:** Always use `===` and `!==` (strict equality) to avoid type coercion bugs

### Logical Operators
```javascript
&&   // AND - both must be true
||   // OR - at least one true
!    // NOT - reverses boolean
```

**Short-circuit Evaluation:**
- `&&`: Returns first falsy value or last truthy
- `||`: Returns first truthy value or last falsy

### Ternary Operator
```javascript
condition ? valueIfTrue : valueIfFalse;

// Example
const result = age >= 18 ? "Adult" : "Minor";
```

### Increment/Decrement
```javascript
let x = 5;
x++;  // Post-increment: returns 5, then x=6
++x;  // Pre-increment: x=6, returns 6
x--;  // Post-decrement
--x;  // Pre-decrement
```

### Null Coalescing Operator (??)
```javascript
const value = null ?? "default";  // "default"
const value2 = 0 ?? "default";    // 0 (only null/undefined trigger default)
// vs || : 0 || "default" = "default" (falsy values trigger default)
```

---

## Chapter 7: If/Else Statements

```javascript
// Basic if
if (condition) {
    // code
}

// If-else
if (condition) {
    // code A
} else {
    // code B
}

// If-else if-else
if (condition1) {
    // A
} else if (condition2) {
    // B
} else {
    // C
}

// Nested if
if (condition1) {
    if (condition2) {
        // code
    }
}
```

**Common Patterns:**
```javascript
// Even/Odd
num % 2 === 0 ? "Even" : "Odd";

// Leap Year
(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// Grade Calculator
if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else if (score >= 70) grade = "C";
else grade = "F";
```

---

## Chapter 9: User Input

```javascript
// Using prompt-sync package
const prompt = require("prompt-sync")();
const name = prompt("Enter your name: ");
```

---

## Chapter 10: Loops

### For Loop
```javascript
for (initialization; condition; increment) {
    // code
}

// Example
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}
```

### While Loop
```javascript
while (condition) {
    // code
}

// Example
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

### Do-While Loop
```javascript
do {
    // code (executes at least once)
} while (condition);
```

### For...of (Arrays/Iterables)
```javascript
const arr = [1, 2, 3];
for (const item of arr) {
    console.log(item);  // 1, 2, 3
}
```

### For...in (Objects/Indices)
```javascript
const obj = {a: 1, b: 2};
for (const key in obj) {
    console.log(key, obj[key]);  // a 1, b 2
}
```

**Loop Control:**
- `break` - Exit loop immediately
- `continue` - Skip to next iteration

---

## Chapter 11: Arrays

### Creating Arrays
```javascript
const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
const arr3 = Array.of(1, 2, 3);
```

### Accessing Elements
```javascript
arr[0];        // First element
arr[arr.length - 1];  // Last element
arr.length;    // Number of elements
```

### Adding/Removing Elements
```javascript
arr.push(item);      // Add to end
arr.pop();           // Remove from end
arr.unshift(item);   // Add to beginning
arr.shift();         // Remove from beginning
arr.splice(index, count, ...items);  // Remove/Add at index
```

### Searching
```javascript
arr.indexOf(item);      // First index of item (-1 if not found)
arr.lastIndexOf(item);  // Last index of item
arr.includes(item);     // true/false
arr.find(item => item > 2);      // First match
arr.findIndex(item => item > 2); // Index of first match
```

### Iteration
```javascript
arr.forEach(item => console.log(item));
arr.map(item => item * 2);        // Transform each element
arr.filter(item => item > 2);     // Keep elements matching condition
arr.reduce((sum, item) => sum + item, 0);  // Accumulate values
```

### Other Useful Methods
```javascript
arr.sort();           // Sort (converts to strings!)
arr.sort((a, b) => a - b);  // Numeric sort
arr.reverse();        // Reverse order
arr.join(", ");       // Convert to string
arr.slice(1, 3);    // Extract portion (non-mutating)
arr.concat(arr2);     // Combine arrays
```

**Important:** `sort()` converts to strings by default! Use compare function for numbers.

---

## Tasks - Common Patterns

### FizzBuzz
```javascript
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}
```

### Max of Two Numbers (Ternary)
```javascript
const max = a > b ? a : b;
```

### HTTP Status Code Categories
```javascript
// 1xx: Informational, 2xx: Success, 3xx: Redirection
// 4xx: Client Error, 5xx: Server Error
```

### Triangle Classification
```javascript
if (a === b && b === c) "Equilateral";
else if (a === b || b === c || a === c) "Isosceles";
else "Scalene";
```

---

## Quick Reference: Truthy & Falsy

**Falsy Values (evaluate to false):**
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`
- `0n` (BigInt zero)

**Everything else is truthy** (including `"0"`, `"false"`, `[]`, `{}`)

---

## VS Code Shortcuts (Windows)

| Shortcut | Action |
|----------|--------|
| `Ctrl + /` | Toggle comment |
| `Ctrl + D` | Select next occurrence |
| `Ctrl + Shift + L` | Select all occurrences |
| `Alt + Up/Down` | Move line up/down |
| `Ctrl + Shift + K` | Delete line |
| `Ctrl + ` ` | Toggle terminal |
| `F5` | Start debugging |
| `Ctrl + Shift + F` | Search across files |

---

## Interview Questions Checklist

- [ ] Difference between `var`, `let`, `const`
- [ ] Explain hoisting with examples
- [ ] `==` vs `===`
- [ ] `null` vs `undefined`
- [ ] FizzBuzz implementation
- [ ] Reverse a string/array
- [ ] Find max/min in array
- [ ] Remove duplicates from array
- [ ] Palindrome check
- [ ] Fibonacci sequence

---

**Happy Revision! Practice coding daily to strengthen concepts.**

> Repository: https://github.com/vishvastav/LearnPlaywright
