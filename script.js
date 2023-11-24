// Botones de numéricos
let button0 = document.getElementById("btn_0");
let button1 = document.getElementById("btn_1");
let button2 = document.getElementById("btn_2");
let button3 = document.getElementById("btn_3");
let button4 = document.getElementById("btn_4");
let button5 = document.getElementById("btn_5");
let button6 = document.getElementById("btn_6");
let button7 = document.getElementById("btn_7");
let button8 = document.getElementById("btn_8");
let button9 = document.getElementById("btn_9");
// Botones de operaciones
let clearButton = document.getElementById("btn_CE");
let divisionButton = document.getElementById("btn_/");
let multiplicationButton = document.getElementById("btn_*");
let plusButton = document.getElementById("btn_+");
let minusButton = document.getElementById("btn_-");
let equalButton = document.getElementById("btn_=");
let decimalButton = document.getElementById("btn_.");
// Pantalla
let inputScreen = document.getElementById("input-screen");

// Variables para almacenar los números y la operación
let firstNumber;
let secondNumber;
let operation;

// Funciones de operaciones
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Error";
  }
}
function add(a, b) {
  return a + b;
}
// Eventos de botones numéricos
button0.addEventListener("click", () => {
  inputScreen.value += 0;
});
button1.addEventListener("click", () => {
  inputScreen.value += 1;
});
button2.addEventListener("click", () => {
  inputScreen.value += 2;
});
button3.addEventListener("click", () => {
  inputScreen.value += 3;
});
button4.addEventListener("click", () => {
  inputScreen.value += 4;
});
button5.addEventListener("click", () => {
  inputScreen.value += 5;
});
button6.addEventListener("click", () => {
  inputScreen.value += 6;
});
button7.addEventListener("click", () => {
  inputScreen.value += 7;
});
button8.addEventListener("click", () => {
  inputScreen.value += 8;
});
button9.addEventListener("click", () => {
  inputScreen.value += 9;
});
// Eventos de botones de operaciones
clearButton.addEventListener("click", () => {
  inputScreen.value = inputScreen.value.slice(0, -1);
});
decimalButton.addEventListener("click", () => {
  if (!inputScreen.value.includes(".")) {
    inputScreen.value += ".";
  }
});
divisionButton.addEventListener("click", () => {
  if (inputScreen.value != "") {
    firstNumber = parseFloat(inputScreen.value);
    inputScreen.value = "";
    operation = divide;
  }
});
multiplicationButton.addEventListener("click", () => {
  if (inputScreen.value != "") {
    firstNumber = parseFloat(inputScreen.value);
    inputScreen.value = "";
    operation = multiply;
  }
});
plusButton.addEventListener("click", () => {
  if (inputScreen.value != "") {
    firstNumber = parseFloat(inputScreen.value);
    inputScreen.value = "";
    operation = add;
  }
});
minusButton.addEventListener("click", () => {
  if (inputScreen.value != "") {
    firstNumber = parseFloat(inputScreen.value);
    inputScreen.value = "";
    operation = subtract;
  }
});
equalButton.addEventListener("click", () => {
  if (inputScreen.value != "") {
    secondNumber = parseFloat(inputScreen.value);
    inputScreen.value = operation(firstNumber, secondNumber);
    firstNumber = null;
    secondNumber = null;
    operation = null;
  }
});
