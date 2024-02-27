//problem-2 reverse the nummber

function reverseNum(num) {
  let reversed = 0;
  while (num > 0) {
    reversed = parseInt(reversed * 10 + (num % 10));
    num = parseInt(num / 10);
  }
  return reversed;
}
console.log("Reversed", reverseNum(9764));
