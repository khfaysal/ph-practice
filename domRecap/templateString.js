const FirstName = "Kamrul";
const SecondName = "Hasan";

const fullName = `${FirstName + " " + SecondName}`;
console.log(fullName);
console.log("Give Me " + `${45 * 6}` + " money");

//dynamic html card:

function getHTMLcard(name, description, price) {
  const div = `
    <div class = "card">
    <h2> ${name}</h2>
    <p> ${description}</p>
    <p> ${price}</p>

    `;
  console.log(div);
}

getHTMLcard("kamrul", "Student", "Can't buy me");
