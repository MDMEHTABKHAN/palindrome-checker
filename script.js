document.getElementById("check-btn").addEventListener("click", () => {
    const input = document.getElementById("input-text").value.trim();
    const resultElement = document.getElementById("result");
  
    if (input === "") {
      resultElement.textContent = "Please enter a valid input.";
      resultElement.style.color = "red";
      return;
    }
  
    const sanitizedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedInput = sanitizedInput.split("").reverse().join("");
  
    if (sanitizedInput === reversedInput) {
      resultElement.textContent = `"${input}" is a Palindrome!`;
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = `"${input}" is not a Palindrome.`;
      resultElement.style.color = "red";
    }
  });
  