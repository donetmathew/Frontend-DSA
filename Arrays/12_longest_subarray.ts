//Brute
function longestSubarrayBrute(arr,k){
	let len=0;
  for(let i=0;i<arr.length;i++){
  let sum=0;
  	for(let j=i;j<arr.length;j++){
    	sum+=arr[j];
      if(sum===k){
        //(j-i+1) is to get the length of elements from i till j
      	len=Math.max(len,(j-i+1));
      }
    }
  }
  return len;
}
console.log("Longest subarray brute",longestSubarrayBrute([1,2,3,1,1,1,1,4,2,3],4));

//Better
function longestSubarrayBetter(arr,k){
  let len=0;
  let sum=0;
  let obj= new Map();
  for(let i=0;i<arr.length;i++){
  		sum+=arr[i];
    if(sum===k){
    	len=Math.max(sum,i+1)
    }
    else if(obj.has(sum-k)){
    	len=Math.max(len,i-obj.get(sum-k))
    }
   else if(!obj.has(sum-k)){
    	obj.set(sum,i);
    }
  }
  console.log(obj);
  return len;
}
console.log("Longest subarray better",longestSubarrayBetter([0,0,0,1],1));

//Optimal
function longestSubarrayOptimal(arr,k){
  let sum=0;
  let len=0;
  let i=0;
  let j=0;
  while(i < arr.length){
  
    sum+=arr[i];
    
    while(j<=i && sum > k){
    	sum-=arr[j];
      j++;
    }
  	
    if(sum === k){
      len=Math.max(len,i-j+1);
    }
    i+=1;
  }
  return len;
  }

console.log("Longest subarray optimal",longestSubarrayOptimal([2,3,5,1,9],10));


