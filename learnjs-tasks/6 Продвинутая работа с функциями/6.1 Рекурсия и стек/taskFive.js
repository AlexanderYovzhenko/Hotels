// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

const printListReverse = (list) => {

  if (list.next) {
    printListReverse(list.next);
  }

  console.log(list.value);
}

printListReverse(list);


console.log('----------------------');


const printListReverseTwo = (list) => {
  let copyList = list;
  const arrElemList = [];

  while (copyList) {
    arrElemList.push(copyList.value);
    copyList = copyList['next'];
  }

  for (const value of arrElemList.reverse()) {
    console.log(value);
  }

}

printListReverseTwo(list);
