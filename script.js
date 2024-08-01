document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const countElement = document.getElementById("count");
  const messageElement = document.getElementById("message");
  const clearButton = document.getElementById("clear");
  const reverseButton = document.getElementById("reverse");
  const capitalizeButton = document.getElementById("capitalize");
  const lowercaseButton = document.getElementById("lowercase");
  const toggleButton = document.getElementById("toggle");
  const countVowelsButton = document.getElementById("countVowels");
  const countConsonantsButton = document.getElementById("countConsonants");

  function updateCount() {
    const text = input.value;
    const charCount = text.length;
    countElement.textContent = `Characters: ${charCount}`;
  }

  function reverseText() {
    input.value = input.value.split("").reverse().join("");
    updateCount();
  }

  function capitalizeText() {
    input.value = input.value.toUpperCase();
    updateCount();
  }

  function lowercaseText() {
    input.value = input.value.toLowerCase();
    updateCount();
  }

  function toggleCase() {
    input.value = input.value
      .split("")
      .map((char) => {
        return char === char.toUpperCase()
          ? char.toLowerCase()
          : char.toUpperCase();
      })
      .join("");
    updateCount();
  }

  function countVowels() {
    const text = input.value.toLowerCase();
    const vowelCount = text.match(/[aeiou]/g)?.length || 0;
    messageElement.textContent = `Vowels: ${vowelCount}`;
    messageElement.style.display = "block";
  }

  function countConsonants() {
    const text = input.value.toLowerCase();
    const consonantCount = text.match(/[^aeiou\s\d\W]/g)?.length || 0;
    messageElement.textContent = `Consonants: ${consonantCount}`;
    messageElement.style.display = "block";
  }

  function clearText() {
    input.value = "";
    updateCount();
    messageElement.style.display = "none";
  }

  input.addEventListener("input", updateCount);
  clearButton.addEventListener("click", clearText);
  reverseButton.addEventListener("click", reverseText);
  capitalizeButton.addEventListener("click", capitalizeText);
  lowercaseButton.addEventListener("click", lowercaseText);
  toggleButton.addEventListener("click", toggleCase);
  countVowelsButton.addEventListener("click", countVowels);
  countConsonantsButton.addEventListener("click", countConsonants);
});
