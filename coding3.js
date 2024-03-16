function countWordsInInput(INPUT, QUERY) {
  const wordCount = {};

  INPUT.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  const result = [];
  QUERY.forEach((word) => {
    result.push(wordCount[word] || 0);
  });

  return result;
}

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];
console.log(countWordsInInput(INPUT, QUERY));
