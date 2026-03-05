function lifeSet(nari, kobulConfirm, whith_whome) {
  const nariValue = nari();
  const kobulValue = kobulConfirm();

  console.log(nariValue + " " + kobulValue + " " + whith_whome);
}

function boloKobul() {
  return "says Alhamdulillah to";
}

function nariRaji(name) {
  return "Jahan";
}

const result = lifeSet(nariRaji, boloKobul, "Faysal");
// console.log(result);
