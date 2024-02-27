//remove duplicates from an array

function removeDuplicates(arr){
  let unique = [];
  for(let i=0;i<arr.length;i++){
    if(unique.indexOf(arr[i]) === -1){
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log("Short hand JS removeDuplicates",Array.from(new Set([1, 2, 7,7,1,9,9,0,0])));
console.log("Remove duplicates": removeDuplicates([1, 2, 7,7,1,9,9,0,0]));
