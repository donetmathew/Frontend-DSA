//Maximum Subarray sum and print start and end
function maxSubArraySum(arr){
  let max=arr[0];
  let sum=0;
  let startEl;
  let endEl;
  for(let i=0;i<arr.length;i++){
    if(sum === 0) startEl=i;
    sum+=arr[i];
    if(sum > max) {
      endEl=i
      max=Math.max(sum,max);
    }
    if(sum < 0){
      sum=0;
    }
  }
  return [max,startEl,endEl];
  
  }
  
  console.log("Maximum subarray sum", maxSubArraySum([ -2, 1, -3, 4, -1, 2, 1, -5, 4]));
