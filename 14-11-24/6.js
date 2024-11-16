// . Problem: Given an array of integers, count how many numbers are even and how many are odd.

// Example Input: [1, 2, 3, 4, 5, 6]
// Example Output: { even: 3, odd: 3 }
function array(a){
    let evenCount=0;
    let oddCount=0;
    for(i=0;i<a.length;i++){
        if(a[i]%2===0){
            evenCount++
        }
        else if(a[i]%2===1){
            oddCount++
        }
    }

    console.log("Even :" + evenCount ,"odd:"+ oddCount)
}
array([1,3,4,6,4,8,9,10])