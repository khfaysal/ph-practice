// T-1:
let names = ["Faysal", "Alex", "Jordan", "Taylor"];
// console.log(names);

names[1] = "Sam";
// console.log(names);

// T-2;
let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

numbers[0] = 444;
// console.log(numbers);

// T-3:

// -------Strings are immutable in JS-------

// T-3:
const capital = "Bangladesh";
// console.log(capital);
capital[1] = "A";
// console.log(capital.length);

// T-4:
const subject = "Chemistry";
const course = "chemistry";

if (subject == course) {
  console.log("will pass the exam...");
} else {
  //   console.log("will not..");
}

// T-5: **
const sub = "ChemistRy";
const cor = "chemisTrY";
// console.log(sub);
// console.log(sub.toLowerCase());
// console.log(sub.toUpperCase());
if (sub.toLowerCase === cor.toLowerCase) {
  //   console.log("Pass korbo Insha'Allah.");
}

// T-6: Google Search  ***
const dnk = "Water";
const dnk1 = "  Water   ";
if (dnk.trim.toLowerCase === dnk1.trim.toLowerCase) {
  //   console.log("milcheeeee reeeeeeeeeeee....");
}

// T-7: Slice the String
const add = "Panchagarh";
const part = add.slice(6, 10);
// console.log(part);

// T-8: devide String into substring:

const intro = "This is Faysal";
// console.log(intro.split(' '));
// console.log(intro.split('s')); //split where it gets "s".

// T-9: join
const frnd = "faysal, kamrul, hasan, jahan, farjana";
// console.log(frnd);
const fr = frnd.split(",");
// console.log(fr);
// console.log(fr.join("|"));

// T-10: Concate:
const first = "Kamrul";
const last = "Hasan";
const fn = first.concat(' ').concat(last);
console.log(fn);
