function convertHeight(inch) {
  const inFit = inch / 12;
  const intFit = parseInt(inFit);
  const fracFit = inch % 12;
  const result = intFit + " Fit " + fracFit + " Inch.";
  return result;
}

const faysalHeight = convertHeight(86);
console.log(faysalHeight);
