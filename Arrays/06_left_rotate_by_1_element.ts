// left rotate array by one element

function leftRotate(arr:Array<number>){
 let temp=arr[0];
 for(let i=0;i<arr.length;i++){
  arr[i]=arr[i+1];
 }
 arr[arr.length - 1]=temp;
 return arr;
}
console.log("Left rotate by one",leftRotate([1,2,3,4,5]))
