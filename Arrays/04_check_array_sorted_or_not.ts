//check if array is sorted or not

function isSorted(arr){
  for(let i=1;i<arr.length+1;i++){
    if(arr[i] < arr[i-1]){
      return false;
    }
  }
  return true;
}
console.log("Is array sorted": isSorted([1, 2, 3, 4, 5,4,3,2,1]));
