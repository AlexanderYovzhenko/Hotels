// Вывод каждую секунду
// важность: 5
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbersInterval(from, to) {
  let currentNumber = from;
  const delay = 1000;

  const intervalId = setInterval(() => {
    console.log(currentNumber);

    if (currentNumber === to) {
      clearInterval(intervalId);
    }

    currentNumber++;
  }, delay);
}

printNumbersInterval(5, 10);

function printNumbersTimeout(from, to) {
  let currentNumber = from;
  const delay = 1000;

  setTimeout(function timer() {
    console.log(currentNumber);

    if (currentNumber < to) {
      setTimeout(timer, delay);
    }

    currentNumber++;
  }, delay);
}

printNumbersTimeout(5, 10);
