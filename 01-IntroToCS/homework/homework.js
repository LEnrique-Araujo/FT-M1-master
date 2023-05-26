'use strict';

function BinarioADecimal(num) {
   const binary = String(num);
  let decimal = 0;
  let power = 0;

  for (let i = binary.length - 1; i >= 0; i--) {
    const digit = parseInt(binary[i]);
    decimal += digit * Math.pow(2, power);
    power++;
  }

  return decimal;
}

function DecimalABinario(num) {
   if (num === 0) {
      return '0';
    }
    let binary = '';
    while (num > 0) {
      binary = (num % 2) + binary;
      num = Math.floor(num / 2);
    }
    return binary;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
