function countWordsInInput(input, query) {
  const wordCount = {};

  for (const word of input) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }

  const result = [];

  for (const word of query) {
    result.push(wordCount[word] || 0);
  }

  return result;
}

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];
console.log(countWordsInInput(INPUT, QUERY));
