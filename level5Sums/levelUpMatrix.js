let mat=[[1,3],[4,6]];
let mat1 = [[4,5,],[10,9],[1,4]];

if(mat.length===mat1.length && mat[0].length==mat1[0].length){
    var main=[]
    for(i=0;i<mat.length;i++){
        var array=[];
        for(j=0;j<mat[0].length;j++){
            var sum= mat[i][j]+mat1[i][j];
            array.push(sum)
        }
        main.push(array)
    }

}
else{
//   console.log(false)
return
}
console.log(main)
