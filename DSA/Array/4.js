
function rever(arr,k){
    for(i=0;i<k;i++){
        let b=arr.pop();
        console.log(b)
        arr.unshift(b);
        console.log(arr)
    }

}
rever([5,6,7,8,9,17,25] , 24)