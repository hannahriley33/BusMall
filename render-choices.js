import { productArray } from './assets/productArray.js'

export function renderProducts(productArray) {

    const div = document.createElement('div');

    const img = document.createElement('img');
        img.src = productArray.image;
        img.alt = productArray.name + 'image';
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

// get random product
export const getRandomProduct = () => {
    const randomProduct = Math.floor(Math.random() * productArray.length);
    let randomProduct2 = Math.floor(Math.random() * productArray.length);
    let randomProduct3 = Math.floor(Math.random() * productArray.length);

}


//get 3 random different products
export const initializeNewQuizQs = () => {

    while (randomProduct === randomProduct2) {
        randomProduct2 = products.getRandomProduct();
    }

    while (randomProduct2 === randomProduct3) {
        randomProduct3 = products.getRandomProduct();
    };
};


