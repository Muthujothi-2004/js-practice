// 1.Implement and sorting algorithm and print the result as a single line
// input
// arr = [1,5,4,2,3]
// output:
// 1 2 3 4 5
// For example:
// TestResultsorting([1,5,4,2,3])
// 1 2 3 4 5


function sorting(n){
    for(i=0;i<n.length-1;i++){
        for(j=i+1;j<n.length;j++){
            if(n[i]>n[j]){
                let temp = n[i]
                n[i]=n[j]
                n[j]=temp
            }
           
        }
    }
    console.log(n.join(" "))
}
sorting([90,1,5,3,2,7])