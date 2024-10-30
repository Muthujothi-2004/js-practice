// Find the second maximum in an array of integers

function array(a){
a.sort((a,b)=>a-b)
console.log(a[a.length-2])

}
array([20,50,10,40,30])