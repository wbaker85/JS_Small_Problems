function multiplesOfThree() {
  let divisor = 1;
  let dividend;

  for (dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree();