// . Write a program to perform a circular shift on an array to the right by one position. The last element of the array should become the first element. WITHOUT USING LIBRARY FUNCTIONS
// Input arr = [45, 21, 15, 19]
// Output: Print the elements of the shifted array, separated by space.

// Input:
// [45, 21, 15, 19]
// Output
// 19 45 21 15

// function circular(arr){
//    let n= arr.length;
//    let last=arr[n-1];
//    for(i=n-1;i>0;i--){
//     arr[i]=arr[i-1]
//    }
//    arr[0]=last

//    console.log(arr.join(" "))
// }
// circular([23,45,67,90])




















function circular(arr){
 if(arr.length<1)return;
 let newarr=[];
 let last = arr[arr.length-1];
 for(i=0;i<arr.length-1;i++){
    newarr[i+1]=arr[i]
 }
 newarr[0]=last;
 console.log(newarr)
}
circular([24,78,90,66])