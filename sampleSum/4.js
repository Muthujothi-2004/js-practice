function array(a, b) {
    array = [];
    for (i = a; i < b; i++) {
        if (i % 2 === 0) {
            array.push(i);

        }
    }
    console.log(array);

    for (i = a; i <= b; i++) {
        if (i % 2 === 1) {
            array.push(i);
        }
    }
    console.log(array);
}
array(1, 10);
