function designerPdfViewer(h, word) {
  const wordArrayOb = [];
  for (let i = 0; i < word.length; i++) {
    wordArrayOb.push(word.charCodeAt(i) - 97);
  }

  const highestLetter = [];
  for (let i = 0; i < wordArrayOb.length; i++) {
    highestLetter.push(h[wordArrayOb[i]]);
    console.log(highestLetter);
  }

  return Math.max(...highestLetter) * word.length;
}

console.log(
  designerPdfViewer(
    [
      1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      5,
    ],
    "hello"
  )
);

console.log("hey brother");
