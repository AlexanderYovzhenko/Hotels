// Создайте калькулятор при помощи конструктора, new Calculator

// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.

// Например:
// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator() {
  this.sum = () => {
    return this.valueOne + this.valueTwo;
  };

  this.mul = () => {
    return this.valueOne * this.valueTwo;
  };

  this.read = () => {
    this.valueOne = +prompt('Введите число', 0);
    this.valueTwo = +prompt('Введите число', 0);
  };
}

let calculator = new Calculator();

calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );