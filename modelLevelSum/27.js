function binarySearch(arr, target){
  arr.sort((a,b)=>a-b)
  console.log(arr)
 let first=0;
 let last=arr.length-1;
while (first<=last){
    let mid=Math.floor((first+last)/2);
    if(arr[mid]==target){
        return mid;
    }
    else if(arr[mid]<target){
        first = mid+1;
    } else{
        last = mid-1;
    }
    
 }
 return-1;


}
console.log(binarySearch([1,3,4,5,7,8,10,1,5,12,1,21,1,34], 10));