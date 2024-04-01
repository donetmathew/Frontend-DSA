function leadersArrayBrute(arr){
let result=[];
	for(i=0;i<arr.length;i++){
  	let leaders=true;
    for(j=i;j<arr.length;j++){
    	if(arr[i] < arr[j]){
      	leaders=false;
        //break;
      }
    }
    if(leaders){
    	result.push(arr[i]);
    }
  }
  return result;
}

console.log("Leaders in an array",leadersArrayBrute([10,22,12,3,0,6]))

function leadersArrayOptimal(arr){
  let max=Number.MIN_SAFE_INTEGER;
  let result=[];
  for(i=arr.length-1;i>=0;i--){
		if(arr[i] > max){
     max=arr[i];
     result.push(arr[i])
    }
  }
  return result;
}

console.log("Leaders in an array",leadersArrayOptimal([10,22,12,3,0,6]))
