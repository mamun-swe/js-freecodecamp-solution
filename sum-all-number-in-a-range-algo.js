function sumAll(arr) {
  let num = 0;

  const min = arr[0] > arr[1] ? arr[1] : arr[0];
  const max = arr[0] < arr[1] ? arr[1] : arr[0];

  for (let i = 0; i < max + 1; i++) {
    if (i >= min) {
      num += i;
    }
  }

  return num;
}

console.log(sumAll([5, 10]));

// OUTPUT - 45