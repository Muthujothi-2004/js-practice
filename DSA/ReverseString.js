// let str ="apple";
//  let b=str.split("").reverse().join("")
//  console.log(b)


 function reverse(n){
      let s= n.split("");
      let ne="";
      for(i=s.length-1;i>=0;i--){
        ne+=s[i]
      }
      console.log(ne)
 }
 reverse("apple")