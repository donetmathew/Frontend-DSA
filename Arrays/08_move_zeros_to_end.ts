//move zeroes to the end of array

function moveZerosToEnd(arr:Array<Number>){
  let j=-1;
  //find index of first 0
  for(let i=0;i<arr.length;i++){
    if(arr[i]==0){
      j=i;
      break;
    }
  }
  //if there is no 0,swap i with j and increment j
  for(let i=j+1;i<arr.length;i++){
    if(arr[i]!=0){
      [arr[j],arr[i]]=[arr[i],arr[j]];
      j++;
    }    
  }
  return arr;
}
console.log(moveZerosToEnd([1,0,0,2,3,0,5,0,7,8,0,10]));
