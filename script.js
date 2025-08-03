// DECIMAL to BINARY
document.querySelectorAll("button")[0].addEventListener("click", () => {
  const decimalInput = document.querySelectorAll("input")[0];
  const value = parseInt(decimalInput.value);
  if (!isNaN(value)) {
    alert(`Binary: ${value.toString(2)}`);
  } else {
    alert("Please enter a valid decimal number.");
  }
});

// BINARY to DECIMAL
document.querySelectorAll("button")[1].addEventListener("click", () => {
  const binaryInput = document.querySelectorAll("input")[1];
  const value = binaryInput.value;
  if (/^[01]+$/.test(value)) {
    alert(`Decimal: ${parseInt(value, 2)}`);
  } else {
    alert("Please enter a valid binary number.");
  }
});

// QUICK INSERT FOR BODMAS
const expressionInput = document.getElementById("expression");
const quickButtons = document.querySelectorAll(".quick-insert .buttons button");
quickButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    expressionInput.value += ` ${btn.textContent} `;
  });
});

// BINARY EXPRESSION EVALUATOR
expressionInput.addEventListener("change", () => {
  try {
    const tokens = expressionInput.value.split(" ");
    const converted = tokens.map(token => {
      if (/^[01]+$/.test(token)) {
        return parseInt(token, 2);
      }
      return token;
    });
    const result = eval(converted.join(" "));
    if (!isNaN(result)) {
      alert(`Result in Binary: ${result.toString(2)}\nResult in Decimal: ${result}`);
    } else {
      alert("Invalid Expression");
    }
  } catch {
    alert("Error evaluating expression");
  }
});

// ARITHMETIC OPERATIONS
const inputs = document.querySelectorAll(".arithmetic input");
let operation = "add";

document.querySelector(".add").addEventListener("click", () => operation = "add");
document.querySelector(".subtract").addEventListener("click", () => operation = "subtract");
document.querySelector(".multiply").addEventListener("click", () => operation = "multiply");

document.querySelector(".calculate").addEventListener("click", () => {
  const a = inputs[0].value;
  const b = inputs[1].value;

  if (!/^[01]+$/.test(a) || !/^[01]+$/.test(b)) {
    alert("Enter valid binary numbers.");
    return;
  }

  const num1 = parseInt(a, 2);
  const num2 = parseInt(b, 2);
  let result = 0;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
  }

  alert(`Result in Binary: ${result.toString(2)}\nResult in Decimal: ${result}`);
});
