//secondLargest and secondSmallest
//Bruteforce approach will sorting and finding out. O(nlogn)

//Better approach
function findSecondLargest(arr:Array<number) {
  let max = arr[0];
  let sLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== max && arr[i] > sLargest) {
      sLargest = arr[i];
    }
  }
  return sLargest;
}
console.log("SecondLargest element:", findSecondLargest([1, 2, 4, 6, 7, 7, 5]));

//Optimized approach

function optimizedSecondLargest(arr: Array<number>) {
  let max = arr[0];
  let sLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max){
      sLargest = max;
      max = arr[i];
    }
    else if(arr[i] !== max && arr[i] > sLargest){
      sLargest = arr[i];
    }
  }
  return sLargest;
}
console.log("Optimized SecondLargest element:", optimizedSecondLargest([1, 2, 4, 6, 7, 7, 5]));

