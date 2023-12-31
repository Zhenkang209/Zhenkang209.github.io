window.addEventListener("load", function () {
  console.log("Window loaded!"); // Part I:

  function handleClick() {
    console.log("Button clicked!"); // Part II:
  }

  const encryptButton = document.getElementById("encrypt-it");
  encryptButton.addEventListener("click", handleClick);

  function handleReset() {
    const inputTextArea = document.getElementById("input-text");
    inputTextArea.value = ""; // Part III:
  }

  const resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", handleReset);

  function handleEncrypt() {
    const inputText = document.getElementById("input-text").value;
    const encryptedText = shiftCipher(inputText); // Part IV:
    displayEncryptedText(encryptedText);
  }

  function shiftCipher(text) {
  text = text.toLowerCase();
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] < 'a' || text[i] > 'z') {
      result += text[i];
    } else if (text[i] == 'z') {
      result += 'a';
    } else { // letter is between 'a' and 'y'
      let letter = text.charCodeAt(i);
      let resultLetter = String.fromCharCode(letter + 1);
      result += resultLetter;
    }
  }
  return result;
}

  function displayEncryptedText(encryptedText) {
    const resultArea = document.getElementById("result");
    resultArea.textContent = encryptedText;
  }
  //
  const encryptItButton = document.getElementById("encrypt-it");
  encryptItButton.addEventListener("click", function () {
    console.log("Encrypt-It! button clicked!");
  });
});
