// Given a string "Freshworks, Global Infocity, Perungudi, Chennai - 600096", print the address on 4 different lines.
//   Expected Output:
//   Freshworks
//   Global Infocity
//   Perungudi
//   Chennai - 600096


function string(num){
    let sum=num.split(',');
    for(i=0;i<sum.length;i++){
        console.log(sum[i].trim());
    }
}
string("Freshworks, Global Infocity, Perungudi, Chennai - 600096");

