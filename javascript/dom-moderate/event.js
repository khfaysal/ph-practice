// Type-2
function mY() {
  document.body.style.backgroundColor = "yellow";
}
function mR() {
  document.body.style.backgroundColor = "red";
}
function mG() {
  document.body.style.backgroundColor = "green";
}
function mP() {
  document.body.style.backgroundColor = "purple";
}
function mA() {
  document.body.style.backgroundColor = "aqua";
}

// Type-3: another way to call by 'Id'
const btnGreen = document.getElementById("btn-green");
btnGreen.onclick = mG; // Assign the function reference, NOT call it

const btnPurple = document.getElementById("btn-purple");
btnPurple.onclick = mP;

// Type-4: addEventListener
const AQ = document.getElementById("make-aqua").addEventListener("click", mA);

