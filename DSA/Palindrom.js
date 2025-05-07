// let palindrome="madam";

function palindrome(n){
      let b= n.split("").reverse().join("");
      if(n===b){
        console.log("yess")
      }

      else{
        console.log("no")
      }
}
palindrome("harii")