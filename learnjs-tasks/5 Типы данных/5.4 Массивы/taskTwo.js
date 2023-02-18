// Сумма введённых чисел

// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

const sumInput = () => {
  const arrNumbersUser = [];
  
  while (true) {
    let valueUser = prompt('Введите число', 0);

    if (!isFinite(valueUser) || valueUser === null || valueUser === '') {
      break;
    }

      arrNumbersUser.push(+valueUser);
  }

  alert(arrNumbersUser.reduce((acc, value) => acc + value, 0));
}

sumInput();