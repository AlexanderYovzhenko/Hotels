BigInt.prototype.toJSON = function() { return this.toString() };

const calculator = {

  addition (numberOne, numberTwo) {
    return JSON.stringify(BigInt(numberOne) + BigInt(numberTwo));
  },

  subtraction (numberOne, numberTwo) {
    return JSON.stringify(BigInt(numberOne) - BigInt(numberTwo));
  },

  multiplication (numberOne, numberTwo) {
    return JSON.stringify(BigInt(numberOne) * BigInt(numberTwo));
  },

  division (numberOne, numberTwo) {
    return JSON.stringify(BigInt(numberOne) / BigInt(numberTwo));
  }

}

const numberOneBig = '89476546456834756834456534456847645473446753688546846465748768876768794955456679568797567889894765464568347568344565344568476454734467536885468464657487688767687949554566795687975678898947654645683475683445653445684764547344675368854684646574876887676879495545667956879756788989476546456834756834456534456847645473446753688546846465748768876768794955456679568797567889';
const numberTwoBig = '8947654645683475683445653445684764547344675368854684646574876887676879495545';

console.log(calculator.addition(numberOneBig, numberTwoBig) + '\n');
console.log(calculator.subtraction(numberOneBig, numberTwoBig) + '\n');
console.log(calculator.multiplication(numberOneBig, numberTwoBig) + '\n');
console.log(calculator.division(numberOneBig, numberTwoBig) + '\n');