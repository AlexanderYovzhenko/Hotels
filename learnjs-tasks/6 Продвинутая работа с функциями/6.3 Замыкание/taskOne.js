// Сумма с помощью замыканий
// важность: 4
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

// Например:

// sum(1)(2) = 3
// sum(5)(-1) = 4

function sum (numberOne) {

  return function (numberTwo) {

    return numberOne + numberTwo;
  }

}

console.log(sum(1)(2));
console.log(sum(5)(-1));
