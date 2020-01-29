import { productArray, productsData } from './assets/productArray.js';
import { getRandomProduct } from './render-choices.js';

const productRadioSelection = document.querySelector('input');

//set initial state
let totalVotes;
let cartVotes;



//function to set initial state
const initializeState = () => {
    totalVotes = 0;
    cartVotes = [];
};

//because I'm currently towards the top of the script, set the state right now initial state
initializeState();
//i also want the first 3 quiz questions to show up on the page on load


//display 3 random products 

const putThreeRandomProductsOnDom = () => {
    let product1 = getRandomProduct(productsData);
    let product2 = getRandomProduct(productsData);
    let product3 = getRandomProduct(productsData);
   
//make sure 3 random products are unique
    while (product1.id === product2.id) {
        product2 = getRandomProduct(productsData);
    }
    while (product1.id === product3.id) {
        product3 = getRandomProduct(productsData);
    }
    while (product2.id === product3.id) {
        product3 = getRandomProduct(productsData);
    }
    

    // put these items on the dom
    
const userOption1 = document.getElementById('option1Group');
const userOption2 = document.getElementById('option2Group');
const userOption3 = document.getElementById('option3Group');

// as radio buttons 
const radioOption1 = document.getElementById('option1');
const radioOption2 = document.getElementById('option2');
const radioOption3 = document.getElementById('option3');

//give radio buttons values
radioOption1.value = product1.id;
radioOption2.value = product2.id;
radioOption3.value = product3.id;

//give radio buttons names
radioOption1.id = product1.name;
radioOption2.id = product2.name;
radioOption3.id = product3.name;

//review this with Marty
const option1Pic=document.getElementById('option1Image');
const option2Pic = document.getElementById('option2Image');
const option3Pic = document.getElementById('option3Image');

//assign images to the options
option1Pic.src = product1.image;
option2Pic.src = product2.image;
option3Pic.src = product3.image;

};

console.log(putThreeRandomProductsOnDom());


//get the form where users inputted info
const formUserInput = document.querySelector('form');

//add event listener to submit button
formUserInput.addEventListener('submit', (e) => {
    e.preventDefault();

    formInputData = new FormData(formUserInput);


});







