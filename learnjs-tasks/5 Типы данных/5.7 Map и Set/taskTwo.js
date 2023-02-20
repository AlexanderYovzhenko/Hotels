// Отфильтруйте анаграммы

// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// Например:

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const aclean = (arr) => {
  let acleanMap = new Map();

  arr.forEach(element => {
    let sort = element.toLowerCase().split('').sort().join('');

    acleanMap.set(sort, element);
  });

  return Array.from(acleanMap.values());
}

console.log(aclean(arr));