/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(arr) {
    if(arr.length === 0) return 0;
    let st= new Set(arr);
    let longest=1;
    for(let item of st){
        let count=0;
        if(!st.has(item-1)){
           while(st.has(item)){
            count=count+1;
            item=item+1;
           }
           longest=Math.max(longest,count);
        }
    }
    return longest;
};
