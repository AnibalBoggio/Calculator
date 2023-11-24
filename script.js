let btn_CE = document.getElementById("btn_CE");
let btn_1 = document.getElementById("btn_1");
let btn_2 = document.getElementById("btn_2");
let btn_3 = document.getElementById("btn_3");
let btn_4 = document.getElementById("btn_4");
let btn_5 = document.getElementById("btn_5");
let btn_6 = document.getElementById("btn_6");
let btn_7 = document.getElementById("btn_7");
let btn_8 = document.getElementById("btn_8");
let btn_9 = document.getElementById("btn_9");
let btn_slash = document.getElementById("btn_/");
let btn_prod = document.getElementById("btn_*");
let btn_min = document.getElementById("btn_-");
let btn_plus = document.getElementById("btn_+");
let btn_enter = document.getElementById("btn_enter");
let btn_dot = document.getElementById("btn_.");
let btn_eq = document.getElementById("btn_=");
let input_screen = document.getElementById("input-screen");

btn_CE.addEventListener("click", () => {
  input_screen.value = input_screen.value.slice(0, -1);
});

btn_1.addEventListener("click", () => {
  input_screen.value += 1;
});
