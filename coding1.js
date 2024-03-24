function reverseAlphabet(input) {
  let chars = "";
  let numbers = "";

  for (const char of input) {
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      chars += char;
    } else {
      numbers += char;
    }
  }

  let reversedChars = "";
  for (let i = chars.length - 1; i >= 0; i--) {
    reversedChars += chars[i];
  }

  return reversedChars + numbers;
}

const inputString = "NEGIE1";
const reversedString = reverseAlphabet(inputString);

console.log("hasil =", reversedString);
