// Rotated
function num(a){
    k=3;
    array=[];
    for(i=k;i<a.length;i++){
        array.push(a[i]);
       
    }

    for(i=0;i<=k;i++){
        array.push(a[i]);
    }
    console.log(array)

}
num(a=[3,4,5,6,7,8])
