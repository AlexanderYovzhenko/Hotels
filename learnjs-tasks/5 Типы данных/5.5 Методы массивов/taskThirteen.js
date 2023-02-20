// Фильтрация по диапазону(task 2)

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)

let arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => {
  const newArr = arr.filter(item => (a <= item && item <= b));

  return newArr;
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered);

console.log(arr);