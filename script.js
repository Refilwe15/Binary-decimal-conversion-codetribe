// Modal Functions
const modal = document.getElementById("result-modal");
const modalText = document.getElementById("modal-result-text");
const closeModal = document.getElementsByClassName("close")[0];

function showModal(message) {
  modalText.innerHTML = message;
  modal.style.display = "block";
}

closeModal.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target === modal) modal.style.display = "none"; };

// Decimal to Binary
document.getElementById("dec-to-bin").addEventListener("click", () => {
  const decimalInput = document.getElementById("decimal-input").value;
  const value = parseInt(decimalInput);
  if (!isNaN(value)) {
    showModal(`Binary: ${value.toString(2)}`);
  } else {
    showModal("Please enter a valid decimal number.");
  }
});

// Binary to Decimal
document.getElementById("bin-to-dec").addEventListener("click", () => {
  const binaryInput = document.getElementById("binary-input").value;
  if (/^[01]+$/.test(binaryInput)) {
    showModal(`Decimal: ${parseInt(binaryInput, 2)}`);
  } else {
    showModal("Please enter a valid binary number.");
  }
});

// Quick Insert Operators
const expressionInput = document.getElementById("expression");
document.querySelectorAll(".quick-insert .buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    expressionInput.value += ` ${btn.textContent} `;
  });
});

// Evaluate Binary Expression (BODMAS)
expressionInput.addEventListener("change", () => {
  try {
    const tokens = expressionInput.value.split(" ");
    const converted = tokens.map(token => /^[01]+$/.test(token) ? parseInt(token, 2) : token);
    const result = eval(converted.join(" "));
    if (!isNaN(result)) {
      showModal(`Result in Binary: ${result.toString(2)}<br>Result in Decimal: ${result}`);
    } else {
      showModal("Invalid Expression");
    }
  } catch {
    showModal("Error evaluating expression");
  }
});

// Binary Arithmetic Section
let operation = "add";
document.querySelector(".add").addEventListener("click", () => operation = "add");
document.querySelector(".subtract").addEventListener("click", () => operation = "subtract");
document.querySelector(".multiply").addEventListener("click", () => operation = "multiply");

document.querySelector(".calculate").addEventListener("click", () => {
  const a = document.getElementById("bin1").value;
  const b = document.getElementById("bin2").value;

  if (!/^[01]+$/.test(a) || !/^[01]+$/.test(b)) {
    showModal("Enter valid binary numbers.");
    return;
  }

  const num1 = parseInt(a, 2);
  const num2 = parseInt(b, 2);
  let result = 0;

  switch (operation) {
    case "add": result = num1 + num2; break;
    case "subtract": result = num1 - num2; break;
    case "multiply": result = num1 * num2; break;
  }

  showModal(`Result in Binary: ${result.toString(2)}<br>Result in Decimal: ${result}`);
});
