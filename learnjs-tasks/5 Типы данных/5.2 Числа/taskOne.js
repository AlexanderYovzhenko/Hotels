// Сумма пользовательских чисел

// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

// P.S. Есть «подводный камень» при работе с типами.

const sumNumberUser = () => {
  
  let numberOne = +prompt('Введите число', '');
  let numberTwo = +prompt('Введите число', '');

  return alert(numberOne + numberTwo);
}

sumNumberUser();