import { productArray, productsData } from './assets/productArray.js'



export function renderProducts(productsData) {

    const div = document.createElement('div');

    const img = document.createElement('img');
        img.src = productsData.image;
        img.alt = productsData.name + 'image';
        div.appendChild(img);

    const input = document.createElement('input');
        input.type = radio;
        input.name = 'userChoice';
        div.appendChild(input);

    const span = document.createElement('span');
        span.textContent = 'select';
        div.appendChild(span);

        return div;
};


//define function where I get a random product
export function getRandomProduct(productArray) {
    //give me a random index number from the index numbers available in the array
    let randomIndexNumber = Math.floor(Math.random() * productsData.length);
    //assign random index number to associate with an index number of array item 
    const randomProduct = productsData[randomIndexNumber];

    return randomProduct;
};






// // get random product
// export const getRandomProduct = () => {
//     let randomProduct = Math.floor(Math.random() * productArray.length);
//     let randomProduct2 = Math.floor(Math.random() * productArray.length);
//     let randomProduct3 = Math.floor(Math.random() * productArray.length);

//     return randomProduct;
//     return randomProduct2;
//     return randomProduct3;
// }


// //get 3 random different products
// export const initializeNewQuizQs = (productArray) => {

//     while (randomProduct.id === randomProduct2.id) {
//         randomProduct2 = getRandomProduct();
//     };

//     while (randomProduct2.id === randomProduct3.id) {
//         randomProduct3 = getRandomProduct();
//     };
    
//     while (random.id === randomProduct3.id) {
//         randomProduct = getRandomProduct();    }
// };



