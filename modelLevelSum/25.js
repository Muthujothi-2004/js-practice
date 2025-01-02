// . You are building a cart page for your website. The website sells
// Mug - M - 500 INR Per piece
// Jeans - J - 3000 INR Per piece
// T shirt - T - 1500 INR Per piece
// Pen - P - 10 INR Per piece

// input: arr = ["M 3", "J 1", "T 2"]
// Output
// 7500

// function carts(cart) {
//     const price = {
//         M: 500,
//         J: 3000,
//         T: 1500,
//         P: 10
//     }
//     let total = 0;
//     for (i = 0; i < cart.length; i++) {
//         const [item, quatity] = cart[i].split(" ")
//         total = total + price[item] * parseInt(quatity)
//     }
//     console.log(total)
// }
// carts(["M 3", "J 1", "T 2"])


function cart (arr){
  var total=0;
  for(i=0;i<arr.length;i++){
    let first=arr[i].split(" ")
    if(first[0]=="M"){
        total=total+first[1]*500
    }
    else if(first[0]=="J"){
        total=total+first[1]*3000
    }
    else if(first[0]=="T"){
        total=total+first[1]*1500
    }
    else if(first[0]=="P"){
        total=total+first[1]*10
    }
  }
  console.log(total)
 
}
cart(["M 3", "J 1", "T 2"])

