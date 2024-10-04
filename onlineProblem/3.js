// Create a program that asks for the total price of items and applies a discount based on conditions:
// 10% discount if the total is more than $100.
// 20% discount if the total is more than $200.
// No discount if the total is less than $100.

function discountBased(a){

    if(a>200){
        di=20/100*a;
        sum=a-di;
        console.log("20% discount is"+sum)
    }
     else if(a>100){
      dis=10/100*a;
      sum=a-dis;
      console.log("10% discount is"+sum);
     
    }

    else{
        console.log("No discount");
    }

}
discountBased(150);


























