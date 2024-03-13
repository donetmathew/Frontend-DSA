 function bestTimeStock(arr:any){
    let min = arr[0];
    let prof=0;
    let maxInd=-1;
    let minInd=0;
    for(let i=1;i<arr.length;i++){
      if(arr[i] < min) minInd=i;
      min=Math.min(min,arr[i]);
      let cost=arr[i] - min;
     if(cost >  prof) maxInd=i;
      prof=Math.max(cost,prof);
    }
    return [minInd,maxInd,prof];
  }
  
  console.log("Best time to buy and sell stock", bestTimeStock([7,1,5,3,6,4]));
