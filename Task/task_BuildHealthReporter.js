// Question 4 — Build Health Reporter

// Problem: Given the percentage of test cases passed in a CI build, report build health.
// 100% → Green Build
// 90–99% → Stable (investigate failures)
// 70–89% → Unstable
// Below 70% → Broken Build (block deployment)
// Sample Input/Output:

// Input: 95
// Output: 🟡 Stable — Investigate failures

// Input: 65
// Output: 🔴 Broken Build — Block deployment

let percentageOfTestCasesPassed = 90;
if (percentageOfTestCasesPassed === 100) {
    console.log(`Input: ${percentageOfTestCasesPassed}`);
    console.log('Output:🟢 Green Build');
}
else if (percentageOfTestCasesPassed <= 99 && percentageOfTestCasesPassed >= 90) {
    console.log(`Input: ${percentageOfTestCasesPassed}`);
    console.log('Output:🟡 Stable — Investigate failures');
}
else if (percentageOfTestCasesPassed <= 89 && percentageOfTestCasesPassed >= 70) {
    console.log(`Input: ${percentageOfTestCasesPassed}`);
    console.log('Output:🟠 Unstable');
}
else if (percentageOfTestCasesPassed < 70) {
    console.log(`Input: ${percentageOfTestCasesPassed}`);
    console.log('Output:🔴 Broken Build (block deployment)');
}
else {
    console.log('Invalid input: Please enter value between 1 - 100')
}