function sample(n){

    con=n.toUpperCase()

    if(con==="A"){
        return true;
    }
    else if(con==="d"||con==="e"||con==="f"){
        return false;
    }
    else{
        return 1;
    }
}
console.log(sample("D"));