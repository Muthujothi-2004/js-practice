// Given a array of integers, count of number of occurrences of the maximum element in the array 

// Sample Input: 3 2 1 3

// Sample Output: 2


function count(a) {

    let count1=0

    for (i = 0; i < a.length; i++) {
        let count = 0;
        for (j = 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                count++
            }

            if(count1<count){
                count1=count;
                ans = a[i]
            }
        }
    }
console.log(ans,count1)
}



count([8, 9, 8, 8, 9, 2, 4,9,9,9,5,6]); 
