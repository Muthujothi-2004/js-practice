function towerOfHanoi(n,s,t,d){
    if (n==1){
        console.log("Move disk from "+s +"to"+d)
    }

    else{
        towerOfHanoi(n-1,s,d)
        console.log("Move disk from "+s +"to"+d);
        towerOfHanoi(n-1,t,s,d)
        }
    }

towerOfHanoi(3,1,2,3)