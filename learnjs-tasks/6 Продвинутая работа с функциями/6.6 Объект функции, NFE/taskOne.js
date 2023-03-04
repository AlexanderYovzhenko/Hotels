// Установка и уменьшение значения счётчика
// важность: 5
// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.

function makeCounter() {

  function counter() {
    return counter.count++
  }

  counter.count = 0;
  counter.set = (value) => counter.count = value;
  counter.decrease = () => counter.count--;

  return counter;
}

let counter = makeCounter();

console.log( counter() ); 
console.log( counter() );

counter.set(10);

console.log( counter() );

counter.decrease();

console.log( counter() );

console.log('--------------------');

//Через замыкание
function makeCounterClosure() {
  let count = 0;

  function counter() {
    return count++
  }

  counter.set = (value) => count = value;
  counter.decrease = () => count--;

  return counter;
}

let counterClosure = makeCounterClosure();

console.log( counterClosure() ); 
console.log( counterClosure() );

counterClosure.set(10);

console.log( counterClosure() );

counterClosure.decrease();

console.log( counterClosure() );
