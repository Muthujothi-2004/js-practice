// Given an array of positive integers sorted in ascending order (increasing order, 1st element is the smallest,
//  Nth element is the largest), implement the binary search algorithm.

function sorted(n){
    for(i=0;i<n.length;i++){
        for(j=i+1;j<n.length;j++){
            if(n[i]>n[j]){
                temp=n[i];
                n[i]=n[j];
                n[j]=temp
            }
        }
    }
    console.log(n.join(', '))
}
sorted([1,4,6,3,2])