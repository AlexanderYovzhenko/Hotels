// Перепишите, используя async/await
// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
// }

// loadJson('no-such-user.json') // (3)
//   .catch(alert); // Error: 404

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/geek';

async function loadJson(url) {
  try {
    const response = await fetch(url);

    if (response.status === 200) {
      return await response.json();
    } 
    
    throw new Error(response.status);
  } catch (error) {
    console.log(error);
  }
}

loadJson(url)
  .then(json => console.log(json))
  .catch(error => console.log(error.message));
