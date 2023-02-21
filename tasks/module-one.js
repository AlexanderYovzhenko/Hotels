//method one 
const toLowerString = (str) => {
  const result = str[0].toUpperCase() + str.slice(1).toLowerCase();

  return result; 
}

const strOne = 'aBsCd';

console.log(toLowerString(strOne));


// method two
const strTwo = 'Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы  , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.';
const currentStr = 'Вот пример строки, в которой используются знаки препинания. После знаков должны стоять пробелы, а перед знаками их быть не должно. Если есть лишние подряд идущие пробелы, они должны быть устранены.';

const refactorSpaceString = (str) => {
  let result = '';
  const arrWords = str.split('.').join('. ')
                      .split(',').join(', ')
                      .split(' ');

  for (const elem of arrWords) {
  
    if (elem === '.' || elem === ',') {
      result = result.trim() + elem + ' ';
    } else if (elem) {
      result += elem + ' ';
    }

  }

  return result.trim();
}

console.log(refactorSpaceString(strTwo) === currentStr);


//method three
const strThree = 'Вот пример строки, в которой используются знаки препинания. После знаков должны стоять пробелы, а перед знаками их быть не должно. Если есть лишние подряд идущие пробелы, они должны быть устранены.';

const countWordsInString = (str) => {
  return str.split(' ').length;
}

console.log(countWordsInString(strThree));


//method four
const strFour = 'Текст, в котором слово текст несколько раз встречается и слово тоже.';

const countUniqueWordsInString = (str) => {
  const result = {};
  const arrWords = str.split(',').join('')
                      .split('.').join('')
                      .split(' ');

  for (const word of arrWords) {

    result.hasOwnProperty(word.toLowerCase()) ? result[word.toLowerCase()] += 1 : result[word.toLowerCase()] = 1;

  }

  return result;
}

console.log('Слова в строке и их количество: ', countUniqueWordsInString(strFour));