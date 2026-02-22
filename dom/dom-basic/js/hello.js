// console.log("something biggest happening here...");
// const liCollection = document.getElementsByTagName("li");
// console.log(liCollection);
// for (const li of liCollection) {
//   console.log(li);
// }

// const foodt = document.getElementById("food-tittle");
// //get-id
// console.log(foodt.innerText);
// foodt.innerText = "food that make me feel awesome";
// //get-id
// const jalSet = document.getElementById("jalS");
// console.log(jalSet.innerText);

// //get-Class
// const prioKhabar = document.getElementsByClassName("prio");
// console.log(prioKhabar);
// for (const khaun of prioKhabar) {
//   console.log(khaun.innerText);
// }
// //advance CSS selector:
// const adv = document.querySelectorAll(".dom span");
// console.log(adv);
// for (const sp of adv) {
//   console.log(sp.innerText);
// }
// //Change css using js ***
// const changeColor = (foodt.style.color = "red");
// foodt.style.backgroundColor = "aqua";
// document.getElementById("jalS").style.color = "red";
// foodt.classList.add("bg-red");
// foodt.classList.remove("bg-red");

// const sections = document.querySelectorAll("section");
// for (sec of sections) {
//   console.log(sec);
//   sec.style.backgroundColor = "skyblue";
//   sec.style.border = "3px solid red";
//   sec.style.marginBottom = "30px";
//   sec.style.borderRadius = "30px";
// }

// const child = document.getElementById("jalS").childNodes;
// const child1 = document.getElementById("jalS").childNodes[1];
// console.log(child[0]);
// console.log(child1);

//create new element:

const newChild = document.createElement("li");
newChild.innerText = "kh";

const cld = document.getElementById("plrs");
cld.appendChild(newChild);

//Practice: adding new list
const newNum = document.createElement("li");
// console.log("--------");
// console.log(newNum);
newNum.innerText = "Five";
// console.log(newNum);
const par = document.getElementById("numeric");
par.appendChild(newNum);
// console.log(par);

//Create a whole section: ***

const mainContainer = document.getElementById("main-sec"); //parent node
// console.log(mainContainer.innerText);

const placesCon = document.createElement("section"); // create child node
const heading = document.createElement("h1"); //create h1 tag
heading.style.fontSize = "5rem";
heading.innerText = "Places I want to visit:"; //add text in h1 tag
placesCon.appendChild(heading); //assign h1 to section

const ul = document.createElement("ul"); //create unordered list and then list items
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
li1.innerText = "Saint Martin";
li2.innerText = "Bandarban";
li3.innerText = "Shylet";
// list to ul, then ul to section:
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
placesCon.appendChild(ul);

// console.log(placesCont.innerText);

mainContainer.appendChild(placesCon); //assign section to mainContainer
// console.log(placesCont.innerHTML);

// Easy way to do the same thing:

const bookNames = document.createElement("section");

bookNames.innerHTML = `
<h1>Favourite Books</h1>
<ul>
<li>Steal Like An Artist</li>
<li>The 100</li>
<li>RDPD</li>
</ul>
`;
mainContainer.appendChild(bookNames);
