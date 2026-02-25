function formatString(str) {
    const res = str.trim().toUpperCase().replace(/ /g, "_");
  return res;
}
console.log(formatString(" hello world "));
// Output: HELLO-WORLD

const result = formatString("   JavaScript is awesome   ");
console.log(result);
