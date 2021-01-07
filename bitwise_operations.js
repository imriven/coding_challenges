// https://edabit.com/challenge/vvuAkYEAArrZvmp6X

const bitwiseAND = (num1, num2) => {
  return num1 & num2;
};

console.log(bitwiseAND(6, 23));

const bitwiseOR = (num1, num2) => {
  return num1 | num2;
};
console.log(bitwiseOR(6, 23));

const bitwiseXOR = (num1, num2) => {
  return num1 ^ num2;
};
console.log(bitwiseXOR(6, 23));

const bitwiseANDBinary = (num1, num2) => {
  return (num1 & num2).toString(2);
};

console.log(bitwiseANDBinary(6, 23));

const bitwiseORBinary = (num1, num2) => {
  return (num1 | num2).toString(2);
};
console.log(bitwiseORBinary(6, 23));

const bitwiseXORBinary = (num1, num2) => {
  return (num1 ^ num2).toString(2);
};
console.log(bitwiseXORBinary(6, 23));
