//problem-5 print divisor logic
//Brute force -loop through from 1 to n and print.
//Optimized- loop through 1 to sqrt(n) and print.
function printDivisor(num) {
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      //  console.log(i);
      //(Uncomment to see values)
      if (num / i !== i) {
        // added this condn to avoid printing 6 twice if num is 36
        // console.log(num / i);
        //(Uncomment to see values)
      }
    }
  }
}
printDivisor(36);
