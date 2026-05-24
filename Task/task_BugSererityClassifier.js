// Question 3 — Bug Severity Classifier
// Problem: Given a bug's impact score (1–10), classify the severity.
// 9–10 → Critical (block release)
// 7–8 → High
// 4–6 → Medium
// // 1–3 → Low
// Anything else → Invalid score
// Sample Input/Output:
// Input: 9
// Output: Severity: Critical — Block release
// Input: 5
// Output: Severity: Medium

let bugImpactScore = 7;

if (bugImpactScore === 9 || bugImpactScore === 10) {
    console.log(`Input: ${bugImpactScore}`)
    console.log('Output: Severity: Critical — Block release')
}
else if (bugImpactScore === 7 || bugImpactScore === 8) {
    console.log(`Input: ${bugImpactScore}`)
    console.log('Output: Severity: High ')
}
else if (bugImpactScore === 4 || bugImpactScore === 6) {
    console.log(`Input: ${bugImpactScore}`)
    console.log('Output: Severity: Medium ')
}
else if (bugImpactScore <= 3 && bugImpactScore >= 1) {
    console.log(`Input: ${bugImpactScore}`)
    console.log('Output: Severity: low ')
}
else {
    console.log(`Input: ${bugImpactScore}`)
    console.log('Output: Invalid score ')
}
