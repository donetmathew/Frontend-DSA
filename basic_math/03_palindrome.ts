//problem-3 palindrome

function palindrome(num) {
  let reversed = 0;
  let number = num;
  while (num > 0) {
    reversed = parseInt(reversed * 10 + (num % 10));
    num = parseInt(num / 10);
  }
  return reversed === number;
}
console.log("palindrome", palindrome(100001));
