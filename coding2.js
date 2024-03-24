function longest(sentence) {
  const words = sentence.split(" ");

  let longestWord = "";
  let maxLength = 0;

  for (const word of words) {
    if (word.length > maxLength) {
      longestWord = word;
      maxLength = word.length;
    }
  }
  return `${longestWord} : ${maxLength} characters`;
}

const sentence = "saya sangat senang mengerjakan soal algoritma";

console.log(longest(sentence));
