// Создайте калькулятор

// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {
  read() {
    this.valueOne = +prompt('Введите число', 0);
    this.valueTwo = +prompt('Введите число', 0);
  },

  sum() {
    return this.valueOne + this.valueTwo;
  },

  mul() {
    return this.valueOne * this.valueTwo;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );