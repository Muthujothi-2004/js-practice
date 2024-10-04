function temp(T,val){
if(T=="c"){
    F = val*(9/5) + 32;
    console.log(F);
}
else if(T=="F"){
    C = (val-32)* (5/9);
    console.log(Math.floor(C));
}
}
temp("F",46)