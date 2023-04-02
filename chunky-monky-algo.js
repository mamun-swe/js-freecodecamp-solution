function chunkArrayInGroups(arr, size) {
  const newArr = [];

  let start = 0;
  let end = size;
  let flag = 1;

  for (let i = 0; i < arr.length; i++) {
    start = i * size;
    end = flag * size;
    flag++;

    if (arr.slice(start, end).length) {
      newArr.push(arr.slice(start, end));
    }
  }

  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g"], 2));

// Output ---- [ [ 'a', 'b' ], [ 'c', 'd' ], [ 'e', 'f' ], [ 'g' ] ]
