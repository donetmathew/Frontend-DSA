// left rotate array by k elements [brute force]
//[1,2,3,4,5] [4,5,1,2,3]
function leftR(arr:Array<number>, d:number){
  d= d%arr.length; //rotating by arr.length returns same array
  let temp=arr.slice(0,d);
  for(let i=d;i<arr.length;i++){
    arr[i-d]=arr[i];
  }
  arr.splice(arr.length-d,d,...temp);//short hand to add temp[]
  // for(i=n-d;i<arr.length;i++){
    //explanation :   n-d - n-d =0 ; n-d -(n-d+1) =1; hence we are getting temp[0],temp
     // arr[i]=temp[i-(n-d)]
  //}
  return arr;
}
console.log("Left rotate by k",leftR([1,2,3,4,5],3))

//left rotate array by k elements [optimized]

function leftROptimized(arr:Array<number>, d:number){
  d= d%arr.length; //rotating by arr.length returns same array
  //[1,2,3,4,5]
  //[3,2,1,5,4]
  //[4,5,1,2,3]
  reverse(arr,0,d-1);
  reverse(arr,d,arr.length-1);
  reverse(arr,0,arr.length-1);
  return arr;
}
function reverse(arr:Array<number>,left:number,right:number){
 while(left<right){
  let temp=arr[left];
  arr[left]=arr[right];
  arr[right]=temp;
  left++;
  right--;
 }
 return arr;
}
console.log("Left rotate by k !",leftROptimized([1,2,3,4,5],3);
