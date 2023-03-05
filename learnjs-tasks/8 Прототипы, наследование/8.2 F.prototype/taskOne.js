// Создайте новый объект с помощью уже существующего
// важность: 5
// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

// Можем ли мы сделать так?

// let obj2 = new obj.constructor();
// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.

// Да можем если 
function Func() {}

Func.prototype = {
  constructor: Func,
  company: 'Hotels',
}

let obj = new Func();
let obj2 = new obj.constructor();

console.log(obj.company, obj2.company);

console.log('-----------------');

// Нет не можем если Func.prototype изменён и не имеет constructor
function FuncChangePrototype() {}

FuncChangePrototype.prototype = {
  company: 'Hotels',
}

let object = new FuncChangePrototype();
let object2 = new object.constructor();

console.log(object.company, object2.company);
