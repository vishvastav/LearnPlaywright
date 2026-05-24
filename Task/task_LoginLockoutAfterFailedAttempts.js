// Question 5 — Login Lockout After Failed Attempts

// Problem: Track failed login attempts. Lock the account after 3 failed attempts.

// Sample Input/Output:

// Input: attempts = 2
// Output: 1 attempt left before lockout

// Input: attempts = 3
// Output: 🔒 Account Locked — Contact support

// Input: attempts = 0
// Output: Login successful


let loginAttempt = 4;
if (loginAttempt === 0) {
    console.log(`Input:attempts = ${loginAttempt}`)
    console.log(`Login successful`)
}
else if (loginAttempt === 2) {
    console.log(`Input: attempts = ${loginAttempt}`)
    console.log(`Output: 1 attempt left before lockout`)
}
else if (loginAttempt === 3) {
    console.log(`Input: attempts = ${loginAttempt}`)
    console.log(`Output: 🔒 Account Locked — Contact support`)
}
else {
    console.log('Please enter loginAttempt value as O, 2 or 3 Only.')
}