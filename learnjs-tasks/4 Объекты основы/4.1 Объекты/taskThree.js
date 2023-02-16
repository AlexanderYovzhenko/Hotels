// Сумма свойств объекта

// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

const sumSalaries = (salaries) => {
  let sum = 0;
  const arrSalaries = Object.values(salaries);

  sum = arrSalaries.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return sum;
};

console.log(sumSalaries(salaries));