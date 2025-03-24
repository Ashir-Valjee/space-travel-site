let plusOne = function (digits) {
  let newDigits = digits;
  for (let i = digits.length - 1; i >= 0; i--) {
    newDigits[i] += 1;
    if (newDigits[i] === 10) {
      newDigits[i] = 0;
    } else {
      return newDigits;
    }
  }
  newDigits.unshift(1);
  return newDigits;
};

console.log(plusOne([9, 9, 9]));
