//problem-6 Check if num is prime or not
//use sqrt method for optimization
function isPrime(N) {
  let cnt = 0;
  for (let i = 1; i * i <= N; i++) {
    if (N % i === 0) {
      cnt++;
      if (N / i !== i) {
        cnt++;
      }
    }
  }
  return cnt;
}

let n = 13;
let ans = isPrime(n);
if (n !== 1 && ans === 2) {
  console.log(n, "Prime Number");
} else {
  console.log(n, "Non Prime Number");
}
