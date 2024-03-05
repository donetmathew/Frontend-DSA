// Dutch National Flag Algorithm (optimal)
function sortZerosOnesTwos(arr){
	let low=0;
  let mid=0;
  let high=arr.length-1;
  
  while(mid<= high){
  	if(arr[mid]=== 0){
    	[arr[mid],arr[low]]=[arr[low],arr[mid]];
      low++;
      mid++;
    }
    else if(arr[mid]=== 1){
    	mid++;
    }
    else if(arr[mid]===2){
      [arr[mid],arr[high]]=[arr[high],arr[mid]];
      high--;
    }
  }
  return arr;
}
console.log(sortZerosOnesTwos([1,0,2,0,1,0,0,2,1,1,0]));
