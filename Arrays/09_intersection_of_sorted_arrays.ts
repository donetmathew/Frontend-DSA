/intersection of sorted arrays
//[brute force approach is to compare each element of arr1 with each element of arr2,keep a visited array of size of arr2 and check if the element in arr1 is present in arr2.]
function intersection(arr1:Array<number>,arr2:Array<number>){
  let arr3 = [];
  let visited=new Array(arr2.length).fill(0);
  for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
      if(arr1[i] < arr2[j]){
        //if the element in arr1 is less than the element in arr2, break as it is not present in arr2 as the array is sorted.
        break;
      }else if(arr1[i] === arr2[j] && visited[j]===0 ){
     	 arr3.push(arr1[i]);
       visited[j]=1;
       break;
      }
    }
  }
  return arr3;
}
console.log("Intersection",intersection([1,2,2,3,3,4,5,6],[2,3,3,5,6,6,7]))

//optimal soln
function intersectionOptimal(arr1:Array<number>,arr2:Array<number>){
  let i=0;
  let j=0;
  let arr3=[];
  while(i<arr1.length && j<arr2.length){
    if(arr1[i] < arr2[j]){
     i++;
   }
   else if(arr2[j] < arr1[i]){
     j++;
   }
   else if(arr1[i]===arr2[j]){
   arr3.push(arr1[i]);
     i++;
     j++
   }
  }
  return arr3;
 }
 console.log("Intersection optimal",intersectionOptimal([1,2,2,3,3,4,5,6],[2,3,3,5,6,6,7]))
