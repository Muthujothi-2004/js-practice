// Given a sorted list with an unsorted number e in the rightmost cell,
// can you write some simple code to insert into the array so that it remains sorted?
// And print each of the steps
// input
// insertionSort1([1,2,4,5,3])
// Output:
// 1 2 4 5 5
// 1 2 4 4 5
// 1 2 3 4 5

function insertionSort1(arr) {
    for(i=1;i<arr.length;i++){
        let temp=arr[i];
        let j=i-1;
        while(j>=0 &&arr[j]>temp){
            arr[j+1]=arr[j];
            let str="";
            for(k=0;k<arr.length;k++){
                str+=arr[k]+" ";
            }
            console.log(str);
            j--;
        }
        arr[j+1]=temp;
    }
        let str1="";
        for(let l=0;l<arr.length;l++){
            str1+=arr[l]+" ";
        }
        console.log(str1);
    }
insertionSort1([1,2,4,5,3])
    
    
    
    
    
    
    