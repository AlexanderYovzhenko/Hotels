// Преобразуйте объект в JSON, а затем обратно в обычный объект

// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

// let user = {
//   name: "Василий Иванович",
//   age: 35
// };

let user = {
  name: "Василий Иванович",
  age: 35
};

const userJson = JSON.stringify(user);
const userCopy = JSON.parse(userJson);

console.log(user);
console.log(userJson);
console.log(userCopy);