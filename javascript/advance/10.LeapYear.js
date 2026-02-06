function LeapYear(year) {
  if (year % 100 != 0 && year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const isLeapYear = LeapYear(2004);
console.log(isLeapYear);
