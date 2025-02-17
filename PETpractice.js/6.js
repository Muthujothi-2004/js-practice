// Given an array of integers, count of number of occurrences of the maximum element in the array 
// Sample Input: 3 2 1 3
// Sample Output: 2

function occurrences(n){
 let b=n[0];
 let count=1;

 for(i=0;i<n.length;i++){
    if(n[i]>b){
        b=n[i]
        count=1;
    }

   else if(n[i]===b){
        count=count+count;
        ans=n[i]
     }
 }


 console.log(count, ans)
}
occurrences([8,9,9,7,2])