function num(a){
// a.reverse();
// console.log(a);
array=[];
for(i=a.length-1;i>=0;i--){
    array.push(a[i])
}
console.log(array);
}
num([1,4,5,6,7])