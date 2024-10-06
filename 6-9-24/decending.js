function des(a){
let c= a.sort(function(a,b){
    return b-a;
})
console.log(c);
}
des(a=[1,2,4,5,8,9])