function maximumConsecutiveOne(arr){
  let counter=0;
  let max=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]===1){
      counter++;
      if(counter > max){
        max=counter;
      }
    }else{
      counter=0;
    }
  }
  return max;

}
console.log("Missing consecutive ones",maximumConsecutiveOne([0,1,1,0,1,1,1,0,1,1]));
