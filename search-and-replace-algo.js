function myReplace(str, before, after) {
  const index = str.indexOf(before);
  if (str[index] === str[index].toUpperCase()) {
    after = after.replace(after[0], after[0].toUpperCase());
  }

  if (str[index] === str[index].toLowerCase()) {
    after = after.toLowerCase();
  }
  return str.replace(before, after);
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);

/**
 * OUTPUT "A quick brown fox leaped over the lazy dog"
 */