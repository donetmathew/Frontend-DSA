 // variety1 : when positive numbers === negative numbers in an array
//brute force
function rearrange(arr){
	let pos=[];
  let neg=[];
  let res=[];
  for(let i=0;i<arr.length;i++){
  	if(arr[i] > 0){
    	pos.push(arr[i]);
    }
    else{
    neg.push(arr[i]);
    }
  }
  for(let i=0;i<arr.length/2;i++){
  	res[2*i]=pos[i];
    res[2*i+1]=neg[i];
  }
  return res;
}
console.log(rearrange([1,2,-3,-1,4,-3]));

//optimal soln
function rearrangeOptimal(arr){
let res=[];
let pos=0;
let neg=1;
	for(let i=0;i<arr.length;i++){
  	if(arr[i] > 0){
    res[pos]=arr[i];
    pos+=2;
    }
    else{
    res[neg]=arr[i];
    neg+=2;
    }
  }
  return res;
}

console.log(rearrangeOptimal([1,2,-3,-1,4,-3]));

//variety2 when pos!==neg and add the leftover elemnts to the array
function rearrangeSign(arr:any){
let pos=[];
let neg=[];
let res=[];
for(let i=0;i<arr.length;i++){
  	if(arr[i] > 0){
    	pos.push(arr[i]);
    }
    else{
    neg.push(arr[i]);
    }
  }
 if(pos.length > neg.length){
 	for(let i=0;i<neg.length;i++){
  	res[2*i]=pos[i];
    res[2*i+1]=neg[i];
  }
  for(let i=neg.length; i < pos.length;i++){
   res.push(pos[i]);
  }
 }else{
 	for(let i=0;i<pos.length;i++){
  	res[2*i]=pos[i];
    res[2*i+1]=neg[i];
  }
  for(let i=pos.length; i < neg.length;i++){
   res.push(neg[i]);
  }
 }
 return res;
}
console.log("Rearrange sign",rearrangeSign([1,2,-3,-1,4,-3,7,8,9]))
