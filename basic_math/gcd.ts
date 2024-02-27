//problem-7 Check GCD/HCF
//Brute force approach
function printGcd(num1, num2) {
  let gcd;
  let min = Math.min(num1, num2);
  for (let i = 1; i <= min; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}
console.log("GCD BRUTE FORCE", printGcd(11, 13));

//opTIMIZED
function printGcdOptimized(num1, num2) {
  let gcd;
  while (num1 > 0 || num2 > 0) {
    if (num1 > num2) {
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1;
    }
    return num1 === 0 ? num2 : num1;
  }
  return gcd;
}
console.log("GCD Optimized", printGcdOptimized(11, 13));
