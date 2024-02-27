//problem-4 armstrong

function armstrong(num) {
  let number = num;
  let armstrongNum = 0;
  let digitCount = Math.ceil(Math.log10(number));
  while (num > 0) {
    armstrongNum = armstrongNum + Math.pow(num % 10, digitCount);
    num = parseInt(num / 10);
  }
  console.log(armstrongNum);
  return armstrongNum == number;
}
console.log("armstrong", armstrong(371));
