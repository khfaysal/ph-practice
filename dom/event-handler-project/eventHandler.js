//Faysal
document.getElementById("faysal").addEventListener("click", function () {
  const bgColor = (document.body.style.backgroundColor = "yellow");
  const nameChange = document.getElementById("fayName");
  nameChange.innerText = "Bhalo Manush";
  nameChange.style.fontSize = "2rem";
  nameChange.style.textAlign = "center";
});
//Meherab
document.getElementById("meherab").addEventListener("click", function () {
  const bgColor = (document.body.style.backgroundColor = "blue");
  const nameChange = document.getElementById("mehName");
  nameChange.innerText = "Fauwa lok";
  nameChange.style.fontSize = "2rem";
  nameChange.style.textAlign = "center";
});
