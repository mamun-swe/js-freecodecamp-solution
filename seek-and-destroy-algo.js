function destroyer(arr, ...args) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (args.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));

/*
 * OUTPUT [ 1, 5, 1 ]
 */
