console.log("something biggest happening here...");
const liCollection = document.getElementsByTagName("li");
console.log(liCollection);
for (const li of liCollection) {
  console.log(li);
}

const foodt = document.getElementById("food-tittle");
//get-id
console.log(foodt.innerText);
foodt.innerText = "food that make me feel awesome";
//get-id
const jalSet = document.getElementById("jalS");
console.log(jalSet.innerText);

//get-Class
const prioKhabar = document.getElementsByClassName("prio");
console.log(prioKhabar);
for (const khaun of prioKhabar) {
  console.log(khaun.innerText);
}
//advance CSS selector:
const adv = document.querySelectorAll(".dom span");
console.log(adv);
for (const sp of adv) {
  console.log(sp.innerText);
}
//Change css using js ***
const changeColor = (foodt.style.color = "red");
foodt.style.backgroundColor = "aqua";
document.getElementById("jalS").style.color = "red";
foodt.classList.add("bg-red");
foodt.classList.remove("bg-red");

const sections = document.querySelectorAll("section");
for (sec of sections) {
  console.log(sec);
  sec.style.backgroundColor = "skyblue";
}
