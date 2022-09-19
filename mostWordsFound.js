const mostWordsFound = (sentences) => {
  let arr = [];
  for (let i = 0; i < sentences.length; i++) {
    arr.push(sentences[i].split(" ").length);
  }
  return Math.max.apply(0, arr);
};
