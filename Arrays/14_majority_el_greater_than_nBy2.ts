//majority element > n/2
function majorityEl(arr){
	let mapObj =  new Map();
  for(let i=0;i<arr.length;i++){
  	if(mapObj.has(arr[i])){
      let count = mapObj.get(arr[i]);
      if(count + 1 > Math.floor(arr.length / 2)){
      	return arr[i];
      }
    	mapObj.set(arr[i],++count);
    }
    else{
    mapObj.set(arr[i],1);
    }
  }
}
console.log(majorityEl([2,2,1,3,1,1,3,1,1]))

//Moore's voting algo
function majorityElOptimized(arr){
let count=0;
let majorityCount=0;
var el;
for(let i=0;i < arr.length;i++){
  if(count=== 0){
     count=1;
     el=arr[i];
  }
  else if (arr[i] === el){
    ++count;
  }
  else{
   --count;
  }
}
for(let i=0;i<arr.length;i++){
	if(arr[i] === el){
  	majorityCount++;
  }
}
return majorityCount > Math.floor(arr.length / 2) ? majorityCount : -1;
}
console.log(majorityElOptimized([2,2,1,3,1,1,3,1,1]));
