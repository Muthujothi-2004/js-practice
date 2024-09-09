let a = 20;
if (a<15) {
    console.log("cityzen");
}
else if ("iscityzen") {
    console.log("true");
}
else {
    console.log("not cityzen");
}


let num=30;
if(num>=20&& num<=30){
    console.log("yes");
}
else{
    console.log("no");
}

num=15;
if(num>10&&num%2==0){
    console.log("this is good");
}
else{
    console.log("this is bad");
}

a=14;
b=12;
c=13;
if(a>5){
    let d=a+b
    console.log(d);
}
else if(a<5){
    d=a+c
console.log(d);
}
else{
    console.log("nothing happend");
}

let Amount=150;
let ismember=true;
if(Amount>50||ismember){
    console.log("Free shiping");
}
else{
    console.log("NO free shiping");
}

let GPA=3.5;
let extracurricular=1;
if(GPA>=3.5&&extracurricular>=1){
    console.log("eligible for scholarship");
}
else{
    console.log("not eligible for scholarship");
}

let totalItem=6;
let totalAmount=100;
let discount=20/100;
if(totalItem>5||totalAmount>100){
    let costPrice=totalAmount-(discount*totalAmount);
    console.log(costPrice)
}
else{
    console.log("No discount");
}

