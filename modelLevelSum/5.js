function alphabetically(n){
  let vowel ="aeiou"
  let empty=""
  for(i=0;i<n.length;i++){
    let char=n[i]

    if(vowel.includes(char) && !empty.includes(char)){
        empty+=char
    }
  }
  console.log(empty.length)
}
alphabetically("cool")
alphabetically("hello")