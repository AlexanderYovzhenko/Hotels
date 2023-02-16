// Функция min(a, b)

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function checkMinNumber(numOne, numTwo) {
  return numOne > numTwo ? numTwo : numOne;
}

console.log(checkMinNumber(2, 5));