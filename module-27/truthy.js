let data;
data = 0; // value but as zero indicates false.
data = 1; // value 1 or more indicates true
data = ""; // faka string
data = " "; // space is not empty, a charecter, so ture
data = "0";
data = undefined;
data = null;

function truthy() {
  if (data) {
    console.log("true");
  } else {
    console.log("false");
  }
}

truthy(data);
