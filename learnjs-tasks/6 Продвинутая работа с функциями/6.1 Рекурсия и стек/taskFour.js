// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без?


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

const printList = (list) => {
  console.log(list.value);

  if (list.next === null) {
    return;
  } else {
    printList(list.next);
  }

}

printList(list);


console.log('----------------------');


const printListTwo = (list) => {
  let copyList = list;
  let flagIterations = true;

  while (flagIterations) {

    if (copyList === null) {
      flagIterations = false;
    } else {
      console.log(copyList.value);
      copyList = copyList['next']; 
    }

  }

}

printListTwo(list);
