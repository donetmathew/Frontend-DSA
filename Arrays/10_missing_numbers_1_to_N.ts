//missing Numbers
 //Brute force
function missingNumber(arr){
	for(let i=1;i<arr.length+1;i++){
  let flag=false;
  	for(let j=0;j<arr.length;j++){
    	if(i===arr[j]){
       flag=true;
      	break;
      }
    }
    if(!flag){
   	 return i;
    }
  }
}
console.log("Missing Number",missingNumber([9,6,4,2,3,5,7,0,1]));
//TC = O(N*N) if number is not present
//SC=0(1)

//Better
function missingNumberBetter(arr:any){
	var arr2=new Array(arr.length+1).fill(0);
  for(let i=0;i<arr.length;i++){
  	arr2[arr[i]]=arr[i];
  }
 for(let i=1;i<arr.length;i++){
 	if(arr[i]=== 0) return i+1;
 }
}
console.log("Missing Number Better",missingNumberBetter([9,6,4,2,3,5,7,0,1]));
//TC = O(2N) 
//SC=0(N)

//Optimal 1
function missingNumberOptimal1(arr:any){
  let sum=((arr.length)*((arr.length)+1))/2;
  let sumArr=arr.reduce((acc:number,el:number ) => el+acc );
  return sum-sumArr;
}
// TC = 0(N) SC= O(1)
console.log("Missing Number OPtimal",missingNumberOptimal1([9,6,4,2,3,5,7,0,1]));

//Optimal 2
function missingNumberOptimal2(arr:any){
  let xor1=0;
  let xor2=0;
  arr.map((el:number,i:number) => {
  	xor1= xor1 ^ el;
    xor2= xor2 ^ (i+1);
  })
  return xor1 ^ xor2;
}
console.log("Missing Number OPtimal",missingNumberOptimal2([9,6,4,2,3,5,7,0,1]));
//TC: O(N) SC: O(1)

XOR is the optimal because if N is 10^5 then XOR of that number would be 10^5, but if you use n*n+1/2, space complexity would got 10^10, where performance decreases
