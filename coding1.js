function reverseAlphabet(input) {
  let chars = "";
  let numbers = "";

  for (const char of input) {
    if (/[a-zA-Z]/.test(char)) {
      chars += char;
    } else {
      numbers += char;
    }
  }

  const arrChar = chars.split("");

  const reverseChar = arrChar.reverse().join("");

  return reverseChar + numbers;
}

const inputString = "NEGIE1";
const reversedString = reverseAlphabet(inputString);

console.log("hasil =", reversedString);
