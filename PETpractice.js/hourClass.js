function hourClass(a) {
    let sum = 0;
    let max = 0;
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            sum = a[i][j] + a[i][j + 1] + a[i][j + 2] + a[i + 1][j + 1] + a[i + 2][j] + a[i+2][j + 1] + a[i+2][j + 2]
            if (max < sum) {
                max = sum;
            }
        }
        

    }
    console.log(max)
}
hourClass([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
])