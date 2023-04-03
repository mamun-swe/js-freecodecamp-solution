function fearNotLetter(str) {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  for (let i = 0; i < str.length; i++) {
    const currentIndexInLetters = letters.indexOf(str[i]);
    const nextValInLetters = letters[currentIndexInLetters + 1];

    if (str[i + 1] !== nextValInLetters) {
      return nextValInLetters;
    }
  }

  return;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuwxyz"));

/**
 * OUTPUT undefined || v
 */