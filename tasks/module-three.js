class Product {

  constructor (name, price, quantity, description) {
    this.name = name,
    this.price = price,
    this.quantity = quantity,
    this.description = description;
  }

}

const apple = new Product('apple', 10, 20, 'fruit'); 
const banana = new Product('fd banana', 2, 5, 'abc fruit'); 
const potato = new Product('potato fd', 2, 50, 'vegetable abc'); 
const carrot = new Product('fd carrot', 2, 30, 'vegetable abc'); 
const table = new Product('table Modern', 70, 7, 'furniture for house'); 
const chair = new Product('chair Modern', 20, 9, 'furniture for house'); 
const fd = new Product('fd', 2, 5, 'abc'); 

const arrProducts = [apple, banana, potato, carrot, table, chair, fd];

const strOne = 'name-contains-fd&price-=2&quantity->5&description-ends-abc';
const strTwo = 'name-starts-fd&quantity-=5';
const strThree = 'name-ends-Modern&price->=10&quantity-<=10&description-contains-furniture';


const filterProducts = (str, products) => {
  let arrFilteredProducts = [];
  const arrParams = str.split('&');

  arrFilteredProducts = products.filter(product =>  {
    const arrBooleanRightProducts = [];

    for (const param of arrParams) {
      const arrElemParam = param.split('-');
  
      if (arrElemParam.length === 3) {

        const keyParam = arrElemParam[0];
        const optionParam = arrElemParam[1];
        const valueParam = arrElemParam[2];
  
        switch (optionParam) {
          case 'starts':
            arrBooleanRightProducts.push(!product[keyParam].indexOf(valueParam));
            break;

          case 'ends':
            arrBooleanRightProducts.push(product[keyParam].indexOf(valueParam) === -1 ? false : 
                                                                                        product[keyParam].indexOf(valueParam) === product[keyParam].length - valueParam.length);
            break;
        
          default:
            arrBooleanRightProducts.push(product[keyParam].includes(valueParam));
            break;
        }

      } else {
        
        const keyParam = arrElemParam[0];
        const optionParam = arrElemParam[1].includes('>=') || arrElemParam[1].includes('<=') ? arrElemParam[1].slice(0, 2) : arrElemParam[1][0];
        const valueParam = arrElemParam[1].includes('>=') || arrElemParam[1].includes('<=') ? arrElemParam[1].slice(2): arrElemParam[1].slice(1);

        switch (optionParam) {
          case '>=':
            arrBooleanRightProducts.push(product[keyParam] >= +valueParam);
            break;

          case '<=':           
            arrBooleanRightProducts.push(product[keyParam] <= +valueParam);
            break;

          case '>':
            arrBooleanRightProducts.push(product[keyParam] > +valueParam);
            break;
            
          case '<':
            arrBooleanRightProducts.push(product[keyParam] < +valueParam);
            break;

          default:
            arrBooleanRightProducts.push(product[keyParam] === +valueParam);
            break;
        }

      }   

    }

    return arrBooleanRightProducts.every(isRightProduct => isRightProduct);   
  });

  return arrFilteredProducts;
}

console.log(filterProducts(strOne, arrProducts), '\n' + '-'.repeat(50));
console.log(filterProducts(strTwo, arrProducts), '\n' + '-'.repeat(50));
console.log(filterProducts(strThree, arrProducts));