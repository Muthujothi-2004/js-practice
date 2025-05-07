function matrix(n) {
  let merge = [];
  let length=3;
  let breadth =3;
  for (i = 0; i <= n.length - 1; i++) {
    for (j = 0; j < n.length; j++) {
      merge.push(n[i][j]);
    }
  }
   let b = merge.sort()

   let newArray =[];

   for(let i=0;i<b.length;i++){
    if(b.length){
        newArray.push(b.splice(0,length))
       }
   }
     

  console.log(newArray);
  console.log(n)
}
matrix([
  [87, 21, 34],
  [89, 32, 78],
  [12, 23, 45],
]);

