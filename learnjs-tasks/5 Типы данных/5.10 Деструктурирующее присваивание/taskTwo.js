// Максимальная зарплата

// У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const topSalary = (salaries) => {
  let topSalaryPerson = 0;
  let topSalaryPersonName = '';

  const arrSalariesPersons = Object.entries(salaries);

  if (!arrSalariesPersons.length) {
    return null;
  }

  for (const personSalary of arrSalariesPersons) {
    if (personSalary[1] > topSalaryPerson) {
      topSalaryPerson = personSalary[1];
      topSalaryPersonName = personSalary[0];
    }
  }

  return topSalaryPersonName;
}

console.log(topSalary(salaries));