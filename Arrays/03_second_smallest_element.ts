function optimizedSecondSmallest(arr: Array<number>) {
  let min = arr[0];
  let sSmallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
   if(arr[i] < min){
      sSmallest = min;
      min = arr[i];
    }
    else if(arr[i] !== min && arr[i] < sSmallest){
      sSmallest = arr[i];
    }
  }
  return sSmallest;
}
console.log("Optimized SecondSmallest element:", optimizedSecondSmallest([1, 2,2, 4, 6, 7, 7, 5]));
