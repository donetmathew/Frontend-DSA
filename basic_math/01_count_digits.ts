//problem-1 count the nummber of digits

function countDigits(num) {
  let counter = 0;
  while (num > 0) {
    num = parseInt(num / 10);
    counter++;
  }
  return counter;
}
console.log("count digits", countDigits(4567));
//Optimized way (Log to the base 10 will always return the count in decimals...so use ceil method)
//Using ceil is very imp
console.log("countdigits", Math.ceil(Math.log10(1234)));
