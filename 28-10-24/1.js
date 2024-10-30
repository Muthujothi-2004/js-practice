function febo(n) {
    let a = 0;
    let b = 1;
    let arr = [0, 1];
    let arr1 = [];
    let c = 0;
    for (i = 3; i <= n; i++) {
        c = a + b;
        arr.push(c)
        a = b;
        b = c;
    }
    console.log(arr);

    for (j = 0; j < arr.length; j++) {
        if (arr[j] % 2 === 0) {
            arr1.push(arr[j])

        }
    
    }
    console.log(arr1)
     if(arr1>0){
       console.log(arr1)
    }
    else{
        console.log("No even")
    }
}

febo(10)