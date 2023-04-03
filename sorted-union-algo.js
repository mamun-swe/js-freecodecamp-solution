function uniteUnique(arr) {
  const finalArr = [];

  const args = [...arguments];

  for (let i = 0; i < args.length; i++) {
    for (let k = 0; k < args[i].length; k++) {
      if (finalArr.indexOf(args[i][k]) === -1) {
        finalArr.push(args[i][k]);
      }
    }
  }

  return finalArr;
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));

/**
 * OUTPUT [1, 2, 3, 5, 4, 6, 7, 8]
 */