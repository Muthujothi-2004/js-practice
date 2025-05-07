// Find the maximum and minimum element in an array.

function minmax(n) {
  let min = n[0];
  let max = n[0];

  for (i = 1; i < n.length; i++) {
    if (min > n[i]) {
      min=(n[i]);
    }
    if (max < n[i]) {
      max=(n[i]);
    }
  }
  console.log(min);
  console.log(max)
}



minmax([20, 7, 100, 79]);
