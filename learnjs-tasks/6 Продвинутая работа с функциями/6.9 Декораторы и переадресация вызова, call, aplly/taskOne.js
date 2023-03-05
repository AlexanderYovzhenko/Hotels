// Декоратор-шпион
// важность: 5
// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

// Каждый вызов должен сохраняться как массив аргументов.

// Например:

// function work(a, b) {
//   alert( a + b ); // произвольная функция или метод
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }
// P.S.: Этот декоратор иногда полезен для юнит-тестирования. Его расширенная форма – sinon.spy – содержится в библиотеке Sinon.JS.

function work(a, b) {
  return a + b;
}

function spy(func) {
  const cache = new Map();

  wrap.calls = [];
  
  function wrap(...args) {
    const key = args.join();
    wrap.calls.push(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.apply(this, args);
    cache.set(key, result);

    return result;
  }

  return wrap;
}

work = spy(work);

console.log(work(1, 2));
console.log(work(4, 5));

for (let args of work.calls) {
  console.log( 'call:' + args.join() );
}
