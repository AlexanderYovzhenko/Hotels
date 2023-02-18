// Случайное число от min до max

// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

// Пример работы функции:

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

const random = (min, max) => {
  const randomNumber = Math.random() * (max - min) + min;

  return randomNumber;
}

console.log( random(1, 5) );
console.log( random(1, 5) );
console.log( random(1, 5) );